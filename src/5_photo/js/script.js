const $btn = document.getElementById("validate_button");
const $additional_photo = document.getElementById("additional-photo");
let currentDrag;

const $add_photo = dragAndDropLoadFile(
    document.getElementById("add-photo"),
    () => {
        $additional_photo.style.display = "grid";
        $btn.classList.remove("disabled");
    }
);
const additional_photo1 = dragAndDropLoadFile(
    document.getElementById("additional-photo1")
);
const additional_photo2 = dragAndDropLoadFile(
    document.getElementById("additional-photo2")
);

function dragAndDropLoadFile(element, callback) {
    function dropHandler(e) {
        if (element.classList.contains("loaded")) {
            if (currentDrag !== element) {
                const currentStyle = currentDrag.style.backgroundImage;
                currentDrag.style.backgroundImage =
                    element.style.backgroundImage;
                element.style.backgroundImage = currentStyle;
            }
            element.classList.remove("over");
        } else {
            e.preventDefault();

            if (e.dataTransfer.items) {
                [...e.dataTransfer.items].forEach((item, i) => {
                    if (item.kind === "file") {
                        const file = item.getAsFile();
                        console.log(`… file[${i}].name = ${file.name}`);
                        loadFile(file);
                    }
                });
            }
        }
    }

    function dragOverHandler(e) {
        e.preventDefault();
    }
    function loadFile(file) {
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            element.style.backgroundImage = `url(${this.result})`;
        });

        reader.readAsDataURL(file);
        element.querySelector(".no-photo").classList.add("hidden");
        element.querySelector(".photo-controller").classList.remove("hidden");
        if (callback) callback();
    }
    element.addEventListener("click", (ev) => {
        if (ev.target == element.querySelector(".close_img")) {
            element.querySelector(".photo-controller").classList.add("hidden");
            element.querySelector(".no-photo").classList.remove("hidden");
            element.style.backgroundImage = "";
        } else {
            const $input = element.querySelector("input");
            $input.addEventListener("change", (e) => {
                loadFile(e.target.files[0]);
                element.classList.add("loaded");
            });
            $input.click();
        }
    });

    element.addEventListener("drop", (e) => {
        dropHandler(e);
    });

    element.addEventListener("dragover", (e) => {
        dragOverHandler(e);
    });

    element.addEventListener("dragstart", (e) => {
        currentDrag = element;
        e.dataTransfer.setData("text", "dragging");
    });

    element.addEventListener("dragenter", (e) => {
        e.preventDefault();
        element.classList.add("over");
    });

    element.addEventListener("dragleave", (e) => {
        element.classList.remove("over");
    });

    element.addEventListener("dragend", (e) => {
        currentDrag = null;
    });

    return element;
}

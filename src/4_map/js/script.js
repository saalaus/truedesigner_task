const $btn = document.getElementById("validate_button");
const $input = document.getElementById("place-input");
const $dropdown = document.getElementById("dropdown-menu");

$input.addEventListener("focus", () => {
    $dropdown.classList.toggle("show");
});

$input.addEventListener("input", () => {
    if ($input.value) $btn.classList.remove("disabled");
    else $btn.classList.add("disabled");
});

Array.from(document.getElementsByClassName("place-option")).forEach(
    (option) => {
        option.addEventListener("click", (e) => {
            $input.value = option.innerText;
            if ($input.value) $btn.classList.remove("disabled");
            else $btn.classList.add("disabled");
            $dropdown.classList.toggle("show");
        });
    }
);

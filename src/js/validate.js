const $input = document.getElementById("validate_input")
const $btn = document.getElementById("validate_button")


$input.addEventListener("input", () => {
    if ($input.value) $btn.classList.remove("disabled")
    else $btn.classList.add("disabled")
})

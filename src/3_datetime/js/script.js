import { Datepicker } from "vanillajs-datepicker";
import ru from "vanillajs-datepicker/locales/ru";

Object.assign(Datepicker.locales, ru);

var input = document.querySelector(".time-input input");
var dropdown = document.querySelector(".time-input .dropdown-menu");
var input2 = document.querySelector("#timepicker2");
var dropdown2 = document.querySelector("#dropdown-menu2");
const $add_end = document.getElementById("add-end");
let hide = 1;

const datepicker = new Datepicker(document.querySelector("#datepicker"), {
    autohide: true,
    showOnClick: true,
    language: "ru",
    format: "D, d MM",
    nextArrow: "<span class='calendar__arrow-right'></span>",
    prevArrow: "<span class='calendar__arrow-left'></span>",
});

const datepicker2 = new Datepicker(document.querySelector("#datepicker2"), {
    autohide: true,
    showOnClick: true,
    language: "ru",
    format: "D, d MM",
    nextArrow: "<span class='calendar__arrow-right'></span>",
    prevArrow: "<span class='calendar__arrow-left'></span>",
});

input.addEventListener("click", () => {
    dropdown.classList.add("show");
});

input2.addEventListener("click", () => {
    dropdown2.classList.toggle("show");
});

document.addEventListener("click", (e) => {
    if (!(e.target.classList.contains("hour-option") || e.target === input)) {
        dropdown.classList.remove("show");
    }
    if (!(e.target.classList.contains("hour-option") || e.target === input2)) {
        dropdown2.classList.remove("show");
    }
});


function setTime(input) {
    const hour = input.dataset.hour ? input.dataset.hour : "00";
    const minute = input.dataset.minute ? input.dataset.minute : "00";
    input.value = `${hour}:${minute}`;
}

Array.from(document.getElementsByClassName("hour-option")).forEach((option) => {
    const $input =
        option.parentElement.parentElement.parentElement.querySelector("input");
    console.log(option.parentElement.parentElement.parentElement);
    option.addEventListener("click", (e) => {
        $input.value = e.target.innerText;
        const $prev_select = document.querySelector(".hour-option.selected");
        if ($prev_select) {
            $prev_select.classList.remove("selected");
        }
        e.target.classList.add("selected");
        $input.dataset.hour = e.target.innerText;
        setTime($input);
    });
});

Array.from(document.getElementsByClassName("minute-option")).forEach(
    (option) => {
        const $input =
            option.parentElement.parentElement.parentElement.querySelector(
                "input"
            );
        option.addEventListener("click", (e) => {
            const $prev_select = document.querySelector(
                ".minute-option.selected"
            );
            if ($prev_select) {
                $prev_select.classList.remove("selected");
            }
            dropdown.classList.remove("show");
            e.target.classList.add("selected");
            $input.dataset.minute = e.target.innerText;
            setTime($input);
        });
    }
);

$add_end.addEventListener("click", () => {
    const $el = document.getElementById("form__group2");
    if (hide == 1) {
        hide = 0;
        $add_end.innerHTML =
            "<span class='trash-icon'></span>Удалить дату завершения";
        $el.classList.remove("hide");
    } else {
        hide = 1;
        $add_end.innerHTML =
            "<span class='plus-icon'></span>Добавить дату завершения";
        $el.classList.add("hide");
    }
});

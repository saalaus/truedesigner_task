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

input.onclick = function () {
    dropdown.classList.toggle("show");
};

input2.onclick = function () {
    dropdown2.classList.toggle("show");
};

Array.from(document.getElementsByClassName("hour-option")).forEach((option) => {
    const $input =
        option.parentElement.parentElement.parentElement.querySelector("input");
    option.addEventListener("click", (e) => {
        $input.value = e.target.innerText;
        const $prev_select = document.querySelector(".hour-option.selected");
        if ($prev_select) {
            $prev_select.classList.remove("selected");
        }
        e.target.classList.add("selected");
    });
});

Array.from(document.getElementsByClassName("minute-option")).forEach(
    (option) => {
        const $input =
            option.parentElement.parentElement.parentElement.querySelector(
                "input"
            );
        option.addEventListener("click", (e) => {
            $input.value = $input.value + ":" + e.target.innerText;
            const $prev_select = document.querySelector(
                ".minute-option.selected"
            );
            if ($prev_select) {
                $prev_select.classList.remove("selected");
            }
            e.target.classList.add("selected");
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

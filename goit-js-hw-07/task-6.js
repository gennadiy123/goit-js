"use strict";
const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlur);

function onBlur(e) {
  if (input.value.length === 6) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

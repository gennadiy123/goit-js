"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function result() {
  output.textContent = input.value;
  if (output.textContent === "") {
    output.textContent = "незнакомец";
  }
}
input.addEventListener("input", result);

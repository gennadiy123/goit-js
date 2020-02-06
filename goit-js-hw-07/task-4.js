"use strict";

const counterValue = document.querySelector("#value");

const counterDecrement = function() {
  counterValue.textContent--;
};
document.querySelector(".decrement").addEventListener("click", counterDecrement);

const counterIncrement = function() {
  counterValue.textContent++;
};
document.querySelector(".increment").addEventListener("click", counterIncrement);


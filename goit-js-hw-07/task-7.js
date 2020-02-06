"use strict";
const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.setAttribute("min", 1);
input.setAttribute("max", 1000);
input.setAttribute("step", 20);

input.addEventListener("input", function(event) {
  span.style.fontSize = this.value + "px";
});

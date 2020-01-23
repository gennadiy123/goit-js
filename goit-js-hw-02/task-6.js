"use strict";

const numbers = [];
let input;
let total = 0;

while (true) {
  input = prompt("Введите число");
  if (input === null) {
    break;
  }
  input = Number(input);
  if (Number.isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(input);
  }
}
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
alert(`Общая сумма чисел равна -- ${total}`);

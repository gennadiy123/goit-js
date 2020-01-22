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
    total += input;
    for (const input of numbers) {
        console.log(numbers.splice(0, 0, input));
      }    
  }
}
alert(`Общая сумма чисел равна -- ${total}`);
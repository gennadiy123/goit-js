"use strict";

let total = 0;

while (true) {
  let input = prompt("Введите любое число");

  if (input === null) {
    break;
  } else if ((input = Number(input))) {
    total += input;
  } else {
    alert("Было введено не число, попробуйте еще раз");
  }
}

alert(`Общая сумма чисел равна ${total}`);

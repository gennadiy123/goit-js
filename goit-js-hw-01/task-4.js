"use strict";

let credits = 23580;
const pricePerDroid = 3000;
const input = prompt("Сколько дроидов вы хотите купить?");
let totalPrice = input * pricePerDroid;
let leftMoney = credits - input * pricePerDroid;

if (input === null) {
  console.log("Отменено пользователем!");
} else if (leftMoney > 0) {
  console.log(
    `Вы купили ${input} дроидов, на счету осталось ${leftMoney} кредитов.`
  );
} else if (leftMoney < 0) {
  console.log("Недостаточно средств на счету!");
} else {
  console.log("Введите число");
}

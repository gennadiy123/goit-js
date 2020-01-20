"use strict";

const china = 100;
const chili = 250;
const australia = 170;
const india = 80;
const yamaika = 120;
let country;
let price;

let input = prompt("Из какой страны вы хотите доставить товар?");
let inputLow = input.toLowerCase();
switch (inputLow) {
  case "китай":
    console.log(`Доставка в Китай будет стоить 100 кредитов`);
    break;

  case "чили":
    console.log(`Доставка в Чили будет стоить 250 кредитов`);
    break;

  case "австралия":
    console.log(`Доставка в Австралию будет стоить 170 кредитов`);
    break;

  case "индия":
    console.log(`Доставка в Индию будет стоить 80 кредитов`);
    break;

  case "ямайка":
    console.log(`Доставка в Ямайку будет стоить 120 кредитов`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}

"use strict";

const china = 100;
const chili = 250;
const australia = 170;
const india = 80;
const yamaika = 120;

let country = prompt("Из какой страны вы хотите доставить товар?");
let countryLow = country.toLowerCase();
switch (countryLow) {
  case "китай":
    alert(`Доставка в Китай будет стоить 100 кредитов`);
    break;

  case "чили":
    alert(`Доставка в Чили будет стоить 250 кредитов`);
    break;

  case "австралия":
    alert(`Доставка в Австралию будет стоить 170 кредитов`);
    break;

  case "индия":
    alert(`Доставка в Индию будет стоить 80 кредитов`);
    break;

  case "ямайка":
    alert(`Доставка в Ямайку будет стоить 120 кредитов`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}

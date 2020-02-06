"use strict";
const selectedById = document.querySelector("#categories").children.length;
console.log(`В списке ${selectedById} категории`);

const Item = document.querySelectorAll(".item");
const itemUl = document.querySelectorAll("ul li");
Item.forEach(tag => {
  console.log(`Категория: ${tag.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${tag.querySelectorAll("ul li").length}`);
});

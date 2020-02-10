"use strict";

import galleryList from "./gallery-items.js";
const elementUl = document.querySelector(".js-gallery");
const elementDiv = document.querySelector(".lightbox");
const elementImg = document.querySelector(".lightbox__image");
const singleBtn = document.querySelector(".lightbox__button");
const itemList = galleryList.reduce(
  (acc, item) =>
    acc +
    `<li class="gallery__item"><a class="gallery__link" href="#"><img class="gallery__image" src =${item.preview} data-source=${item.original} alt=${item.description}></a></li>`,
  ""
);
elementUl.insertAdjacentHTML("beforeend", itemList);

elementUl.addEventListener("click", handleNavClick);
singleBtn.addEventListener("click", handleClick);

function handleNavClick(event) {
  if (event.target.classList.contains("gallery__image")) {
    elementDiv.classList.add("is-open");
    elementImg.setAttribute("src", event.target.dataset.source);
  }
}

function handleClick(event) {
  if (event.target.classList.contains("lightbox__button")) {
    elementImg.removeAttribute("src");
    elementDiv.classList.remove("is-open");
  }
}

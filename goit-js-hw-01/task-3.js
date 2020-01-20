"use strict";
const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const input = prompt("Please enter desired hotel name:");
if (input === null) {
  console.log((message = "Отменено пользователем!"));
} else if (input === ADMIN_PASSWORD) {
  console.log((message = "Добро пожаловать!"));
} else console.log((message = "Доступ запрещен, неверный пароль!"));
alert(message);

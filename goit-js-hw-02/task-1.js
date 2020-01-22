"use strict";
const clients = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i], "-", clients.indexOf(clients[i]) + 1);
}

const logItems = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
for (let i = 0; i < logItems.length; i += 1) {
  console.log(String(logItems[i]), "-", logItems.indexOf(logItems[i]) + 1);
}

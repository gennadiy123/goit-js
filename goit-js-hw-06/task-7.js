"use strict";
import users from "./users.js";
const calculateTotalBalance = users => {
  return users
    .map(user => user.balance)
    .reduce(function(sum, current) {
      return sum + current;
    }, 0);
};

console.log(calculateTotalBalance(users)); // 20916

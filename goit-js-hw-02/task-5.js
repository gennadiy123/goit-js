"use strict";
const checkForSpam = function(message) {
  const words = message.toLowerCase();
  if (words.includes("sale") || words.includes("spam")) {
    return true;
} else {
    return false;
}
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

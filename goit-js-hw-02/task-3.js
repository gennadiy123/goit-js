"use strict";
const findLongestWord = function(string) {
  let stringSplit = string.split(" ");
  let longestWord = stringSplit[0];
  for (let i = 1; i < stringSplit.length; i += 1) {
    if (stringSplit[i].length > longestWord.length) {
      longestWord = stringSplit[i];
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

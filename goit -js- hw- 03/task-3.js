"use strict";
const findBestEmployee = function(employees) {
  const value = Object.values(employees);
  const max = Math.max(...value);
  const index = value.indexOf(max);
  const key = Object.keys(employees);
  return key[index];
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux

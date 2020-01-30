"use strict";
class Account {
  constructor(login, email) {
    this.login = login;
    this.email = email;
  }

  getInfo() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  }
}

console.log(Account.prototype.getInfo);

const mango = new Account("Mangozedog", "mango@dog.woof");

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account("Poly", "poly@mail.com");

poly.getInfo(); // Login: Poly, Email: poly@mail.com

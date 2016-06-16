const uuid = require('uuid');

function Account(name) {
  this.name = name;
  this.number = uuid.v1();
  this.balance = 0;
  this.deposits = [];
  this.withdraws = [];

}

Account.prototype.AddDeposit=function(depAmount) {
    this.balance += depAmount;
    this.deposits.push(depAmount);
    return this.balance;
};

Account.prototype.withdraw=function(withdrawAmount) {
      if (this.balance > withdrawAmount) {
        this.balance -= withdrawAmount;
        this.withdraws.push(withdrawAmount);
      }
      return this.balance;
};
module.exports = Account;

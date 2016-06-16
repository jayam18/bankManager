function Bank(name){
  this.name = name;
  this.accounts = [];


}
module.exports = Bank;

Bank.prototype.AddAccount = function(account){
this.accounts.push(account);
};

Bank.prototype.getValue = function (){
  this.value=this.accounts.reduce((acc, val) => acc.balance + val.balance);
console.log("accounts:", this.accounts);
  return this.value;
};

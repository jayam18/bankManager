/*eslint-disable func-names, prefer-arrow-callback*/
const expect = require('chai').expect;
const Bank = require('../lib/bank');
const Account = require('../lib/account');
describe('Bank', function( ) {
  describe('constructor', function( ) {
    it('gives you a Bank along with account details', function( ) {
      const b1 = new Bank ('BoA');
      a1=new Account('Sara');
    //  a2=new Account('Bob');
      //b1.account
      expect(b1).to.be.instanceof(Bank);
      expect(b1.name).to.equal('BoA');
      expect(b1.accounts).to.be.length(0);
 });
 it('gives you the accounts in the Bank', function( ) {
   const b2 = new Bank ('BoA');
   a1=new Account('Sara');
   a1.AddDeposit(50);
   a2=new Account('Bob');
   a2.AddDeposit(200);
   b2.AddAccount(a1);
   b2.AddAccount(a2);

   expect(b2.accounts).to.be.length(2);
   expect(b2.accounts[0].balance).to.equal(50);
   expect(b2.accounts[1].balance).to.equal(200);


});

it('gives you the value of the Bank', function( ) {
  const b2 = new Bank ('BoA');
  a1=new Account('Sara');
  a1.AddDeposit(50);
  a2=new Account('Bob');
  a2.AddDeposit(200);
  b2.AddAccount(a1);
  b2.AddAccount(a2);
  let value = b2.getValue();
  expect(value).to.equal(250);


});
});
});

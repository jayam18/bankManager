/*eslint-disable func-names, prefer-arrow-callback*/
const expect = require('chai').expect;
const Account = require('../lib/account');
describe('Account', function( ) {
  describe('constructor', function( ) {
    it('should create an account with default values', function( ) {
      const a1 = new Account('Bob', 50);
      expect(a1).to.be.instanceof(Account);
      expect(a1.number).to.be.length(36);
      expect(a1.balance).to.equal(0);
      expect(a1.name).to.equal('Bob');
      expect(a1.deposits).to.be.length(0);
      expect(a1.withdraws).to.be.length(0);
    });
  });

  describe('#AddDeposit', function( ) {
    it('should add the inputted deposit amount into the account', function( ) {
      const a1 = new Account('Bob');
      let bal = a1.AddDeposit(100);
      expect(a1).to.be.instanceof(Account);
      expect(a1.balance).to.equal(100);
      expect(a1.name).to.equal('Bob');
      expect(a1.deposits).to.be.length(1);
      expect(a1.deposits).to.deep.equal([100]);
    });
  });

  describe('#withdraw', function( ) {
    it('successfull & unsuccessful withdraw from the account', function( ) {
      const a1 = new Account('Bob');
      a1.AddDeposit(100);
      expect(a1).to.be.instanceof(Account);
      expect(a1.balance).to.equal(100);
      expect(a1.name).to.equal('Bob');
      a1.withdraw(50);
      expect(a1.withdraws).to.be.length(1);
      expect(a1.withdraws).to.deep.equal([50]);
      a1.withdraw(75);
      expect(a1.withdraws).to.deep.equal([50]);
      expect(a1.withdraws).to.be.length(1);
    });
  });
});

const expect = require('chai').expect;
require('../lib/accounts');


describe('Accounts', function(){
  describe('constructor', function(){
    it('should create an account with default values', function(){
      const a1 = new Accounts('Bob', 50);
      expect(a1).to.be.instanceof(Account);
      expect(a1.number).to.be.length(36);
      expect(a1).to.deep.equal({name:'Bob', balance:50});
      expect(a1).to.deep.equal({name:'Bob', balance:50});
      expect(a1).to.deep.equal({name:'Bob', balance:50});

    });
  });
});

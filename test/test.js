require('should');

var request = require('supertest');

var a = require('..')
describe('Awesome module', function() {
  it('Should return the expected value', function(done) {
    a(1.050, 1.010).toFixed(2).should.equal('5.24');
    done();
  });
  it('Should complain', function(done) {
    a.should.throw();
    done();
  });
});

describe('Server', function() {
  it('Should respond as expected', function(done) {
    var s = require('../server');
    request(s)
    .get('/whatever')
    .end(function(e, r) {
      r.statusCode.should.equal(200);
      r.text.should.equal('hello2');
      done(e);
    });
  });
});

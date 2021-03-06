var mocha = require('mocha');
var should = require('should');
var telldus = require('../lib/telldus');

describe('Basic tdtool commands', function() {
  it('list', function(done) {
    var td = telldus('./test/fixtures/list/');
    td.list(function(err, list){
      should.not.exist(err);
      should.exist(list);
      list.should.have.property('length', 4);
      list[0].id.should.equal('1');
      list[0].name.should.equal('switch1');
      list[0].onOff.should.equal('ON');
      list[3].id.should.equal('4');
      list[3].name.should.equal('switch4');
      list[3].onOff.should.equal('OFF');
      done();
    });
  });

  it('turnOn', function(done) {
    var td = telldus('./test/fixtures/on/');
    td.turnOn(1, function(err){
      should.not.exist(err);
      done();
    });
  });

  it('turnOff', function(done) {
    var td = telldus('./test/fixtures/off/');
    td.turnOff(1, function(err){
      should.not.exist(err);
      done();
    });
  });
});

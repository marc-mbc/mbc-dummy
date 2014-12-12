/* globals browser, element, by */
'use strict';

//http://chaijs.com/
var chai = require('chai');

//https://github.com/domenic/chai-as-promised/
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
var Dummy_Page = require('./pages/dummy.js');

module.exports = function() {

  this.World = function World(callback) {
    this.bdgt = new Dummy_Page();
    callback();
  };

  //var ptor = protractor.getInstance();

  this.Given(/^I am on dummy$/, function (callback) {
    this.bdgt.get()
      .then(callback);
  });

  this.Then(/^I should see a greeting message$/, function (callback) {
    this.bdgt.get_greeting().then(function (text) {
      expect(text).to.be.equal('Dummy: Hello world!');
      callback();
    });
  });
};
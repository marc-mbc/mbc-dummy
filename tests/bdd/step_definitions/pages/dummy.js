/* globals browser, element, by */
'use strict';
var Dummy_Page = function Dummy_Page() {
  this.greeting = element(by.binding('hello_world'));
};

/**
 * Go to the dummy page
 * @param cb Callback to finish
 */
Dummy_Page.prototype.get = function () {
  return browser.get('/assets/web_component_dist/mbc-dummy/index.html');
};

/**
 * Get greeting text
 */
Dummy_Page.prototype.get_greeting = function () {
  return this.greeting.getText();
};

module.exports = Dummy_Page;
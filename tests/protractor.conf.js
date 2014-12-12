exports.config = {
  baseUrl: 'http://localhost:8080',
  rootElement: 'bdgt-dummy',
  //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',
  framework: 'cucumber',
  specs: [
    './bdd/features/**/*.feature'
  ],
  multiCapabilities: [
    // {
    //   browserName: 'phantomjs',
    //   'phantomjs.binary.path': require('phantomjs').path,
    //   'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG'],
    //   'phantomjs.cli.args': '--debug=true --webdriver --webdriver-logfile=webdriver.log --webdriver-loglevel=DEBUG',
    //   //version: '',
    //   //platform: 'ANY'
    // }
    // ,
    {
      'browserName': 'chrome',
      'chromeOptions': {
        'args': ['show-fps-counter=true']
      }
    }
  ],
  cucumberOpts: {
    require: './bdd/step_definitions/**/*.js',
    format: 'pretty'
  }
};
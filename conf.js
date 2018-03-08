// An example configuration file.
exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	//chromeDriver: 'C:\Users\zchoudhary\eclipse-workspace\WFAProject1\node_modules\protractor\node_modules\webdriver-manager\selenium\chromedriver_2.35.exe',
	geckodriver: 'C:\Users\zchoudhary\eclipse-workspace\WFAProject1\node_modules\protractor\node_modules\webdriver-manager\selenium\geckodriver-v0.19.1.exe',
	seleniumServerJar: 'C:\Users\zchoudhary\eclipse-workspace\WFAProject1\node_modules\protractor\node_modules\webdriver-manager\selenium\selenium-server-standalone-3.9.1.jar',
  //directConnect: true,
  //firefox:true,

  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: {
    'browserName': 'firefox',
    'platfrom': 'ANY',
    
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['Copy of ReportsHomePage_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
	  showColors: true,
    defaultTimeoutInterval: 3000000
  }
};

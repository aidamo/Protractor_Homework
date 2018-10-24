import {browser, Config} from "protractor";

export let config: Config = {

    framework: 'jasmine',
    allScriptsTimeout: 15000,
    capabilities: {'browserName': 'chrome'},
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.manage().timeouts().setScriptTimeout(150000); //implicit wait
    },
    baseUrl:"http://bhdtest.endava.com/petclinic/",
    specs: ['specs/spec1.js'],
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 20000
    }
};
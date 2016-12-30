// Karma configuration
// Generated on Fri Sep 04 2015 07:08:31 GMT+0200 (CEST)

const path = require('path');

module.exports = function(config) {

    const sourceDir = path.join(__dirname, 'src');
    const testDir = path.join(__dirname, 'test');

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['qunit'],


        // list of files / patterns to load in the browser
        files: [
            'test/index.js'
        ],


        // webpack configuration
        webpack: {
            module: {
                rules: [{
                    test: /\.js$/,
                    include:[
                        sourceDir,
                        testDir
                    ],
                    loader: 'babel-loader'
                }]
            },
            resolve: {
                modules: [
                    'src',
                    'node_modules'
                ]
            },
        },


        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
        preprocessors: {
            'test/index.js': ['webpack'],
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false

    });
};
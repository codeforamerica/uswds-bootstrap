// Karma configuration
// Quixote-specific configuration starts with "QUIXOTE:"

(function () {
  'use strict';

  var paths = require('./paths.js');
  module.exports = function (config) {
    config.set({

      // base path, that will be used to resolve files and exclude
      basePath: '../../..',

      // frameworks to use
      frameworks: [ 'mocha', 'commonjs' ],

      // list of files / patterns to load in the browser
      files: [
        'test/specs/**/*.js',
        'test/vendor/**/*.js',

        // QUIXOTE: Serve the CSS file so we can load it in our tests
        // Mark it `included: false` so Karma doesn't load it automatically

        //Serve both Bootstrap and the USWDS Bootstrap Theme
        { pattern: 'docs/bootstrap/css/bootstrap.css', included: false },
        { pattern: 'dist/css/uswds.css', included: false },
        { pattern: 'test/testframe.html', included: false },
      ],

      // list of files to exclude
      exclude: [],

      // Serve the documentation so that we can pull in elements for testing
      proxies: {
        '/test-frame': {
          'target': 'http://localhost:9001/test-frame',
          'changeOrigin': true
        },
        '/bootstrap': {
          'target' : 'http://localhost:9001/bootstrap'
        },
        '/dist': {
          'target' : 'http://localhost:9001/dist'
        }
      },

      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
        'test/**/*.js': [ 'commonjs' ]
      },

      // test results reporter to use
      // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
      reporters: [ 'dots' ],

      // web server port
      port: 9876,

      // enable / disable colors in the output (reporters and logs)
      colors: true,

      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,

      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: false,

      // Start these browsers, currently available:
      // - Chrome
      // - ChromeCanary
      // - Firefox
      // - Opera
      // - Safari (only Mac)
      // - PhantomJS
      // - IE (only Windows)
      browsers: [],

      // If browser does not capture in given timeout [ms], kill it
      captureTimeout: 60000,

      // Continuous Integration mode
      // if true, it capture browsers, run tests and exit
      singleRun: false,
    });
  };

}());

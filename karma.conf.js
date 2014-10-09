module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    logLevel: config.LOG_INFO,
    browsers: [
      'PhantomJS'
    ],
    reporters: [
      'dots',
    ],

    files: [
      'browser.js'
    ],
    singleRun: true
  });
};

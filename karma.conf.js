module.exports = function(config) {
  let files = "tests/*.spec.js";

  if (config.module) {
    files = `tests/${config.module}.spec.js`;
  }

  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
      'tests/**/*.spec.js': ['browserify']
    },
    files: [files],
    reporters: ["spec"],
    specReporter: {
      suppressErrorSummary: true, // do not print error summary
      suppressFailed: false, // do not print information about failed tests
      suppressPassed: true, // do not print information about passed tests
      suppressSkipped: true, // do not print information about skipped tests
      showSpecTiming: false, // print the time elapsed for each spec
      failFast: false // test would finish with error when a first fail occurs. 
    },
    webpack: {
      module: {
        loaders: [{
          test: /\.js/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }]
      },
      watch: true
    },
    autoWatch: true
  });
}

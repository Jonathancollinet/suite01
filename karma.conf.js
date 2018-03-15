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
    reporters: ['spec'],
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

module.exports = function(config) {
  config.set({
    autoWatch: false,
    basePath: 'app',
    browsers: ['PhantomJS'],
    files: [
      '**/*.js'
    ],
    frameworks: ['jasmine'],
    singleRun: true
  });
};
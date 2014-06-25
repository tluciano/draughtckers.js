module.exports = function(grunt) {

  var srcFiles = [
    'src/constants.js',
    'src/draughtckers.js'
  ];

  grunt.initConfig({
    jasmine: {
      src: srcFiles,
      options: {
        specs: 'test/draughtckers_test.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('test','jasmine');
};

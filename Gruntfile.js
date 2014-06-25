module.exports = function(grunt) {

  var srcFiles = [
    'src/constants.js',
    'src/checkers.js'
  ];

  grunt.initConfig({
    jasmine: {
      src: srcFiles,
      options: {
        specs: 'test/checkers_test.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('test','jasmine');
};

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    cssmin : {
      options : {
        shorthandCompacting : false,
        roundingPrecision : -1
      },
      target : {
        files : {
          'output.css' : ['test1.css', 'test2.css']
        }
      }
    }
  });
  grunt.registerTask('default', []);
};
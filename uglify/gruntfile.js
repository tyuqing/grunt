module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    uglify : {
      build : {
        files : {
          'base.min.js' : ['base.js']
        }
      }
    }
  });
  grunt.registerTask('default', []);
}
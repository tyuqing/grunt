module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    htmlhint : {
      build : {
        options : {
          'tag-pair': true,
          'tagname-lowercase': true,
          'attr-lowercase': true,
          'attr-value-double-quotes': true,
          'doctype-first': true,
          'spec-char-escape': true,
          'id-unique': true,
          'head-script-disabled': true,
          'style-disabled': true
        },
        src : ['index.html']
      }
    }
  });
  grunt.registerTask('default', []);
}
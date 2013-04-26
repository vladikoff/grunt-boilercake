'use strict';

var APP_SRC = "app/client/src/";
var APP_OUT = "build";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: {
      tmp: ['app/client/tmp/']
    },
    watch: {
      less: {
        files: [APP_SRC + '**/*'],
        tasks: ['default']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'less', 'copy']);
  grunt.registerTask('dev', ['default', 'watch']);
};

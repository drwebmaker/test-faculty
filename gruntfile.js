module.exports = function (grunt) {

  grunt.initConfig({
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    express: {
      server: {
        options: {
          bases: ["public", "bower_components"],
          livereload: true
        }
      }
    },


    watch: {
      css: {
        files: ['public/scss/**/*.scss'],
        tasks: ['compass']
      },

      livereload: {
        files: ['public/*.html', 'public/css/*.css', 'public/scripts/**/*.js'],
        options: {
          livereload: true
        }
      }
    }


  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');

  grunt.registerTask('default', ['compass', 'express', 'watch', 'express-keepalive']);
  grunt.registerTask('install', 'default');

};
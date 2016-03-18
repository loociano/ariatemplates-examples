module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  var origin = 'src';
  var destination = 'examples/';

  grunt.initConfig({
    "babel": {
      options: {
        sourceMap: false
      },
      dist: {
        files: [{
          cwd: origin,
          expand: true,
          src: ['**/*.js'],
          dest: destination
        }]
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: origin,
            src: '**',
            dest: destination
          },
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask("default", ['copy', 'babel']);

};
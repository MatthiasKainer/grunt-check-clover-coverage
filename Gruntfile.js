/*
 * grunt-check-clover-coverage
 * https://github.com/MatthiasKainer/grunt-check-clover-coverage
 *
 * Copyright (c) 2015 MatthiasKainer
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    
    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },        
        
        check_clover_coverage : {
            options: {
                "tresholds": {
                    "elements": 80,
                    "statements": 80,
                    "conditionals": 80,
                    "methods": 80
                }
            },
            success : {
                src: ["test/fixtures/success.xml"]
            },
            fail : {
                src: ["test/fixtures/failure.xml"]
            }
        }

    });
    
    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');
    
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('fail', ['jshint', 'check_clover_coverage:fail']);
    
    grunt.registerTask('default', ['jshint', 'check_clover_coverage:success']);

};

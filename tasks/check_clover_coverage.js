/*
 * grunt-check-clover-coverage
 * https://github.com/MatthiasKainer/grunt-check-clover-coverage
 *
 * Copyright (c) 2015 MatthiasKainer
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    
    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks
    
    grunt.registerMultiTask('check_clover_coverage', 'Loads a generated clover coverage xml file and enforces code coverage on the file', function () {
        var clover = {
            load : require('./../lib/load.js').load,
            validate : require('./../lib/validate.js').validate
        };

        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            tresholds: {
                "elements": 80,
                "statements": 80,
                "conditionals": 80,
                "methods": 80
            }
        }),
        failed = false;
        
        // Iterate over all specified file groups.
        this.files.forEach(function (f) {
            // Concat specified files.
            var src = f.src.filter(function (filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).forEach(function (filepath) {
                grunt.verbose.writeln("Checking report " + filepath + "... ");
                var report = clover.load(grunt, filepath);
                
                grunt.verbose.writeln("Report loaded: " + JSON.stringify(report, undefined, 2));
                var result = clover.validate(grunt, report, options.tresholds);
                if (!result.success) {
                    failed = true;
                    grunt.log.error("Report " + filepath + " does not meet expected thresholds");
                    grunt.verbose.error(JSON.stringify(result.covered, undefined, 2));
                }
                else {
                    grunt.verbose.oklns("Report " + filepath + " does meet expected thresholds");
                }
            });
            
            if (failed) {
                grunt.fail.warn("One or more tresholds where not met");
            } else {
                grunt.log.oklns("All tresholds where met");
            }

        });
    });

};

/*
 * grunt-check-clover-coverage
 * https://github.com/MatthiasKainer/grunt-check-clover-coverage
 *
 * Copyright (c) 2015 MatthiasKainer
 * Licensed under the MIT license.
 */

'use strict';

module.exports.validate = function (grunt, report, tresholds) {
    var check = function (value) {
        var metrics = report.coverage.project[0].metrics[0].$;
        // if the metric does not exist it is always covered ;)
        if (metrics[value] < 1) return true;
        var coverage = Math.round(100.0 * (metrics["covered" + value] / metrics[value]));
        grunt.verbose.writeln("Metric " + value + " has coverage of " + coverage + " and an expected coverage of " + tresholds[value]);
        return (coverage >= tresholds[value]);
    };
    
    var result = {
        success : true,
        covered : {}
    };

    Object.keys(tresholds).forEach(function (value) {
        result.covered[value] = check(value);
        result.success = result.success && result.covered[value];
    });

    return result;
};
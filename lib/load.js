/*
 * grunt-check-clover-coverage
 * https://github.com/MatthiasKainer/grunt-check-clover-coverage
 *
 * Copyright (c) 2015 MatthiasKainer
 * Licensed under the MIT license.
 */

'use strict';

module.exports.load = function (grunt, file, encoding) {

    function loadXMLDoc() {
        var fs = require('fs');
        var xml2js = require('xml2js');
        var json;
        try {
            var fileData = fs.readFileSync(file, encoding || 'utf-8');
            
            var parser = new xml2js.Parser();
            parser.parseString(fileData.substring(0, fileData.length), function (err, result) {
                json = JSON.stringify(result);
            });
            grunt.verbose.oklns("File '" + file + " was successfully read.\n");
            return JSON.parse(json);
        } catch (ex) { grunt.fail.warn(ex); }
    }
    
    return loadXMLDoc(file);
};
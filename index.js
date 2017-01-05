'use strict';

var mapStream   = require('map-stream');
var gutil       = require('gulp-util');
var c           = gutil.colors;
var through     = require('through2');
var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-git-filter';

var gitFilterPlugin = function (options) {
    options = options || {};

    return mapStream(function (file, cb) {
        var errorMessage = '';
        console.log(file.path);

        try {
            indent.assertIndent(file.contents + '', options);
        } catch (err) {
            errorMessage = JSON.stringify(err);
        }
        file.indent = formatOutput(errorMessage);

        cb(null, file);
    });
};

module.exports = gitFilterPlugin;

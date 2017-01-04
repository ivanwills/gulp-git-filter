/* global require, process */
var opt = require('node-getopt-long').options([
        ['out|o', 'Output'],
    ],
    {
        name          : 'gulp-git-filter',
        commandVersion: '0.0.1'
    }
);

/** @class gulp-git-filter
 *  @created 2017-01-04
 *  @brief
 *  @author  Ivan Wills
 *  @version 0.0.1
 *  @warning
 *  @todo implementation
 *  @bug
 *
 *  gulp-git-filter description
 */

/*
Copyright (c) 2017 Ivan Wills (14 Mullion Close, Hornsby Heights, NSW Australia 2077).
All rights reserved.

This file is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

Xoo is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Xoo; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA
*/

gulp-git-filter.prototype             = new Object();
gulp-git-filter.prototype.constructor = gulp-git-filter;
gulp-git-filter.superclass            = Object.prototype;
/**
 *  @param r1:
 *  @param r2:
 *
 *  object creator
 */
function gulp-git-filter( r1, r2,  ) {
    if ( arguments.length > 0 ) this.init( 'gulp-git-filter', r1, r2,  );
}

/**
 *  @param  class_name: The name of the class instantiating this object.
 *  @param r1:
 *  @param r2:
 *
 *  The gulp-git-filter object initialiser
 */
gulp-git-filter.prototype.init = function( class_name, r1, r2,  ) {

    // init the parent class
    gulp-git-filter.superclass.init.call( this, class_name );

    this.bodyid = bodyid;
}

/**
 *  @param r1:
 *  @param r2:
 *
 *  
 */
gulp-git-filter.prototype.example = function ( r1, r2,  ) {

}

var exports;
exports.gulp-git-filter = gulp-git-filter;

"use strict";
var gulp = require('gulp');
var util = require('gulp-util');
// --------------
var source = {
    css:[
        ''
    ],
    js:[
        ''
    ],
    sourceCss:[
        ''
    ],
    sourceJs:[
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js'
    ]
};
// --------------
// Build dev.
gulp.task('devjs', function () {
    return gulp.src(source.sourceJs)
        .pipe(newer(sourceJsDest))
        .pipe(concat('lib.js'))
        .pipe(jsmin())
        .pipe(gulp.dest('assets/js/'));
});
//# sourceMappingURL=gulpfile.js.map
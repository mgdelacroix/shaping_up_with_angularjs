var gulp = require('gulp'),
    jade = require('gulp-jade'),
    clean = require('gulp-clean'),
    paths = {
        dist: 'dist/',
        templates: 'app/templates/**/*.jade',
        js: 'app/js/**/*.js',
        jsDist: 'dist/lib/',
        vendor: 'app/vendor/**/*',
        vendorDist: 'dist/vendor/'
    };

gulp.task('jade', function() {
    gulp.src(paths.templates)
        .pipe(jade({ pretty: true }))
        .pipe(gulp.dest(paths.dist))
});

gulp.task('js', function() {
    gulp.src(paths.js)
        .pipe(gulp.dest(paths.jsDist))
});

gulp.task('clean', function() {
    gulp.src(paths.dist)
        .pipe(clean({ read: false }))
});

gulp.task('deploy', ['copyVendor', 'jade', 'js']);

gulp.task('copyVendor', function() {
    gulp.src(paths.vendor)
        .pipe(gulp.dest(paths.vendorDist))
});

gulp.task('watch', function() {
    gulp.watch(paths.templates, ['jade']);
    gulp.watch(paths.js, ['js'])
});

gulp.task('default', ['deploy', 'watch']);

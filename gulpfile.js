const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
  return gulp
    .src(['app/**/*.ts'])
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('static', function() {
  return gulp.src(['app/**/*.html', 'app/**/*.js', 'app/**/*.css']).pipe(gulp.dest('dist/app'));
})

gulp.task('build', ['compile', 'static']);
//gulp.task('default', ['build']);
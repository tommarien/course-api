/* eslint-disable import/no-extraneous-dependencies */
const gulp = require('gulp');
const bump = require('gulp-bump');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');

/* Aliases */
gulp.task('default', ['serve:api']);

/* Utility */

/* Utility - Bump */
gulp.task('bump', [], Object.assign(() =>
  gulp
    .src('./package.json')
    .pipe(bump())
    .pipe(gulp.dest('./'))
  , { description: 'Increment patch number of version, so 1.0.0 becomes 1.0.1' }));

gulp.task('bump:minor', [], Object.assign(() =>
  gulp
    .src('./package.json')
    .pipe(bump({ type: 'minor' }))
    .pipe(gulp.dest('./'))
  , { description: 'Increment minor number of version, so 1.0.1 becomes 1.1.0' }));

gulp.task('bump:major', [], Object.assign(() =>
  gulp
    .src('./package.json')
    .pipe(bump({ type: 'major' }))
    .pipe(gulp.dest('./'))
  , { description: 'Increment minor number of version, so 1.1.1 becomes 2.0.0' }));

/* Utility - Lint */
gulp.task('lint', Object.assign(() =>
  gulp.src(['./**/*.js'])
    .pipe(eslint())
    .pipe(eslint.formatEach('stylish', process.stderr))
  , { description: 'Lint all JS code' }));

/* Main */
gulp.task('serve:api', [], Object.assign(() =>
  nodemon({
    script: './app.js',
    ext: 'js',
    ignore: [
      'node_modules/**',
      './**/*.spec.js',
      './**/*.test.js',
    ],
    env: {
      NODE_ENV: 'development',
    },
    tasks: ['lint'],
    delay: '200',
  })
  , { description: 'Start API server with nodemon in development mode' }));

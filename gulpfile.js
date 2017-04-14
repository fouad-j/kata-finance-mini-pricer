const babelOutput = './babel-output';
const sources = {
  scripts: ['src/**/*.js'],
  dependenciesJS: []
};

const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const babel = require('gulp-babel');
const del = require('del');
const path = require("path");

gulp.task('default', ['test']);

gulp.task('test', ['babel'], () => gulp.src(path.join(babelOutput, '**.spec.js')).pipe(jasmine()));

gulp.task('babel', () => gulp.src(sources.scripts).pipe(babel({presets:['es2015']})).pipe(gulp.dest(babelOutput)));

gulp.task('clean', cb => del(babelOutput, cb));
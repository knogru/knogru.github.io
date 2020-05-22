const gulp = require("gulp");
const sass = require("gulp-dart-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

gulp.task("sass", function() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("app.css"))
    .pipe(gulp.dest("css"));
});
gulp.task("sass:watch", function() {
  gulp.watch("./scss/**/*.scss", ["css"]);
});

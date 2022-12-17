import gulp from 'gulp';
import path from '../config/path.js';
import app from '../config/app.js';
import newer from 'gulp-newer';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export default () => {
  console.log('Конвертация шрифтов');
  return gulp.src(path.fonts.src)
    .pipe(newer(path.img.dest))
    .pipe(fonter(app.fonter))
    .pipe(gulp.dest(path.fonts.dest))
    .pipe(gulp.src(path.fonts.src))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(path.fonts.dest));
};

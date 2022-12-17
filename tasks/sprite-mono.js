import gulp from 'gulp';
import path from '../config/path.js';
import gulpSvgSprite from 'gulp-svg-sprite';
import svgo from 'gulp-svgo';

export default () => {
  console.log('Генерация монохромного спрайта');
  return gulp
    .src(path.spritemono.src)
    .pipe(
      svgo({
        plugins: [
          {
            removeAttrs: {
              attrs: ['class', 'data-name', 'fill', 'stroke.*'],
            },
          },
        ],
      })
    )
    .pipe(
      gulpSvgSprite({
        mode: {
          symbol: {
            sprite: '../sprite-mono.svg',
          },
        },
      })
    )
    .pipe(gulp.dest(path.spritemono.dest));
};

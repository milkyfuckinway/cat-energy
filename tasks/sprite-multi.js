import gulp from 'gulp';
import path from '../config/path.js';
import gulpSvgSprite from 'gulp-svg-sprite';
import svgo from 'gulp-svgo';

export default () => {
  console.log('Генерация цветного спрайта');
  return gulp
    .src(path.spritemulti.src)
    .pipe(svgo({
      plugins: [
        {
          removeAttrs: {
            attrs: ['class', 'data-name'],
          },
        },
        {
          removeUselessStrokeAndFill: false,
        },
        {
          inlineStyles: true,
        },
      ],
    },
    ))
    .pipe(
      gulpSvgSprite({
        mode: {
          symbol: {
            sprite: '../sprite-multi.svg',
          },
        },
      },
      )
    )
    .pipe(gulp.dest(path.spritemulti.dest));
};

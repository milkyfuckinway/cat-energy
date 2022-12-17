import gulp from 'gulp';
import browserSync from 'browser-sync';
import path from './config/path.js';
import clear from './tasks/clear.js';
import pug from './tasks/pug.js';
import scss from './tasks/scss.js';
import js from './tasks/js.js';
import img from './tasks/img.js';
import svg from './tasks/svg.js';
import fonts from './tasks/fonts.js';
import app from './config/app.js';
import applyfonts from './tasks/applyfonts.js';
import spritemono from './tasks/sprite-mono.js';
import spritemulti from './tasks/sprite-multi.js';
import applysprite from './tasks/applysprite.js';
import plugins from './tasks/plugins.js';
import makepicturetag from './tasks/makepicturetag.js';

const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  });
};

const watcher = () => {
  gulp.watch(path.pug.watch, pug).on('all', browserSync.reload);
  gulp.watch(path.sass.watch, scss).on('all', browserSync.reload);
  gulp.watch(path.js.watch, js).on('all', browserSync.reload);
  gulp.watch(path.svg.watch, svg).on('all', browserSync.reload);
  gulp.watch(path.img.watch, img).on('all', browserSync.reload);
  gulp.watch(path.img.watch, makepicturetag).on('all', browserSync.reload);
  gulp.watch(path.spritemono.watch, spritemono).on('all', browserSync.reload);
  gulp.watch(path.spritemulti.watch, spritemulti).on('all', browserSync.reload);
  gulp.watch(path.fonts.watch, fonts).on('all', browserSync.reload);
  gulp.watch(path.fonts.watch, applyfonts).on('all', browserSync.reload);
  gulp.watch(path.spritemono.watch, applysprite).on('all', browserSync.reload);
  gulp.watch(path.spritemulti.watch, applysprite).on('all', browserSync.reload);
  gulp.watch(path.plugins.watch, plugins).on('all', browserSync.reload);
};

const build = gulp.series (
  clear,
  gulp.parallel(
    img,
    fonts,
    pug,
    scss,
    js,
    svg,
    spritemono,
    spritemulti,
    plugins,
  ),
  makepicturetag,
  applyfonts,
  applysprite,
);

const dev = gulp.series (
  clear,
  gulp.parallel(
    fonts,
    pug,
    scss,
    js,
    svg,
    spritemono,
    spritemulti,
    plugins,
    img,
  ),
  makepicturetag,
  applyfonts,
  applysprite,
  gulp.parallel(watcher, server),
);
export default app.isProd ? build : dev;

export {build, dev, server, watcher, clear, applysprite, fonts, applyfonts, spritemono, spritemulti, makepicturetag};

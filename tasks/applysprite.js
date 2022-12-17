import path from '../config/path.js';
import fs from 'fs-extra';

const monodir = './src/img/sprite/mono';
const multidir = './src/img/sprite/multi';

export default (done) => {
  if (fs.existsSync(path.htmlsprite.appendto)) {
    fs.unlink(path.htmlsprite.appendto);
  }
  console.log('Генерация файла с подключенными спрайтами');
  fs.readdir(monodir, (err, items) => {
    if (items) {
      items.forEach((item) => {
        fs.appendFile(path.htmlsprite.appendto, `svg(width='#' height='#')\n    use(xlink:href="img/sprite-mono.svg#${item.split('.')[0]}")\n\r`);
      });
    }
  });
  fs.readdir(multidir, (err, items) => {
    if (items) {
      items.forEach((item) => {
        fs.appendFile(path.htmlsprite.appendto, `svg(width='#' height='#')\n    use(xlink:href="img/sprite-multi.svg#${item.split('.')[0]}")\n\r`);
      });
    }
  });
  done();
};

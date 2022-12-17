import fs from 'fs-extra';

export default (done) => {
  const cmdir = './src/img/content-manual/';
  const cdir = './src/img/content/';
  if (fs.existsSync('./src/pug/layout/picture.pug')) {
    fs.unlink('./src/pug/layout/picture.pug');
  }
  fs.readdir(cmdir, (err, files) => {
    if (files) {
      fs.readdir(cmdir, (errr, items) => {
        items.forEach((item) => {
          fs.appendFile(
            './src/pug/layout/picture.pug',
            `"Для файлов ${item}"
picture
  source(type="image/webp" media="(min-width: 1150px)" srcset="./img/content/${item}/${item}_desktop.webp, ./img/content/${item}/${item}_desktop@2x.webp 2x")
  source(type="image/webp" media="(min-width: 768px)" srcset="./img/content/${item}/${item}_tablet.webp, ./img/content/${item}/${item}_tablet@2x.webp 2x")
  source(type="image/webp" srcset="./img/content/${item}/${item}_mobile.webp, ./img/content/${item}/${item}_mobile@2x.webp 2x")
  source(media="(min-width: 1150px)" srcset="./img/content/${item}/${item}_desktop.jpg, ./img/content/${item}/${item}_desktop@2x.jpg 2x")
  source(media="(min-width: 768px)" srcset="./img/content/${item}/${item}_tablet.jpg, ./img/content/${item}/${item}_tablet@2x.jpg 2x")
  img(class="#" src="./img/content/${item}/${item}_mobile.jpg" alt="#." srcset="./img/content/${item}/${item}_mobile@2x.jpg 2x" width="#" height="#")
  \n`
          );
        });
      });
    }
  });
  fs.readdir(cdir, (err, files) => {
    if (files) {
      fs.readdir(cdir, (errr, items) => {
        items.forEach((item) => {
          fs.appendFile(
            './src/pug/layout/picture.pug',
            `"Для файлов ${item}"
picture
  source(type="image/webp" media="(min-width: 1150px)" srcset="./img/content/${item}/${item}_desktop.webp, ./img/content/${item}/${item}_desktop@2x.webp 2x")
  source(type="image/webp" media="(min-width: 768px)" srcset="./img/content/${item}/${item}_tablet.webp, ./img/content/${item}/${item}_tablet@2x.webp 2x")
  source(type="image/webp" srcset="./img/content/${item}/${item}_mobile.webp, ./img/content/${item}/${item}_mobile@2x.webp 2x")
  source(media="(min-width: 1150px)" srcset="./img/content/${item}/${item}_desktop.jpg, ./img/content/${item}/${item}_desktop@2x.jpg 2x")
  source(media="(min-width: 768px)" srcset="./img/content/${item}/${item}_tablet.jpg, ./img/content/${item}/${item}_tablet@2x.jpg 2x")
  img(class="#" src="./img/content/${item}/${item}_mobile.jpg" alt="#." srcset="./img/content/${item}/${item}_mobile@2x.jpg 2x" width="#" height="#")
  \n`
          );
        });
      });
    }
  });
  done();
};

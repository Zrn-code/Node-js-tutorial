const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {

  // lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log('hello');
  });
  greet();
  greet();

  // 設定內容類型
  res.setHeader('Content-Type', 'text/html');

  // 路徑
  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

  // 傳送html檔案
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });


});

// 本地主機為第二個參數
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
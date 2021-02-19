const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made');
});

// 本地主機為第二個參數
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
const express = require('express');

// express app
const app = express();

// 聆聽請求
app.listen(3000);

app.get('/', (req, res) => {
  // res.send('<p>home page</p>');
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile('./views/about.html', { root: __dirname });
});

// 重新導向
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 頁面
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});

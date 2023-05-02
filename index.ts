const express = require('express')
const app = express()
const http = require('http');
const port = 8080;
const host = '192.168.3.14';
const urlencodedParser = express.urlencoded({extended: false}); //парсер данных


app.get((req,res) => {
  res.send('this home page')
  res.end('end');
  // console.log(res)
})

app.listen(port,host, () => {
  console.log('Сервер запущен: http://' + host + ':' + port)
})



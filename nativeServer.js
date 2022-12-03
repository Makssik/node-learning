const http = require('http');

function requestHandler(req, res) {
  res.writeHead(200, { 'content-type': 'text/json' });
  res.end(
    JSON.stringify({
      name: 'maks',
      age: 10,
    }),
  );
}

const port = 8080;
const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    console.log(`Ошибка!!! ${err}`);
  }
  console.log(`Сервер запущен на порте ${port}`);
});

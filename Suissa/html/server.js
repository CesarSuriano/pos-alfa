const http = require('http');
const fs = require("fs");
//const index = fs.readFileSync('./index.html');

const server = http.createServer(function (request, response) {

  if (request.url === '/') {
    response.writeHead(200, { "Content-Type": "text/html" });
    return response.end(fs.readFileSync('./index.html'))
  }

  const url = request.url.replace('/', '');
  console.log('url', url);
  fs.readFile(url + '.html', (err, file) => {
    if (err) {
      response.writeHead(404, { 'Content-Type': 'text/html' })
      return response.end(fs.readFileSync('./404.html'))
    }

    response.writeHead(200, { 'Content-Type': 'text/html' })
    return response.end(file)
  });
});


server.listen(3000, function () {
  console.log('Executando Servidor HTTP');
})
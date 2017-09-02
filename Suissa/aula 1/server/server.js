const http = require('http');

const server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Cesinha bichão</h1>");
  response.end();
});

server.listen(3000, function(){
  console.log('Executando Servidor HTTP');
});
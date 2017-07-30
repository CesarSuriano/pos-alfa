const http = require('http');
const config = require('./config');
const fs = require("fs");
const ACTIONS = ['create', 'read', 'update', 'delete']
//const index = fs.readFileSync('./index.html');

const server = http.createServer(function (request, response) {
  const action = request.url.replace('/', '')
  console.log('action', action)
  require(ACTIONS[action])

  //Daqui pra baixo é opcional
  // switch (request.url) {

  //   case '/create':
  //     require('./create')
  //     break;

  //   case '/read':
  //     //response.writeHead(200, { "Content-Type": "text/html" });
  //     require('./read')
  //     break;

  //   case '/update':
  //     //response.writeHead(200, { "Content-Type": "text/html" });
  //     require('./update')
  //     break;

  //   case '/delete':
  //     //response.writeHead(200, { "Content-Type": "text/html" });
  //     require('./delete')
  //     break;
  // }
})
server.listen(3000, function () {
  console.log('Executando Servidor HTTP');
})
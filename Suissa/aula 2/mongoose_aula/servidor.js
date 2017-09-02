const fs=require('fs')
const http = require('http')

http.createServer((request, response) => {

  if(request.url==='./'){
    const action =request.url.replace('/','')
    switch (param) {
      case 'create':
          require('./create')

        break
        case 'read':
            require('./read')

          break;
          case 'delete':
              require('./delete')

            break;
            case 'update':
                require('./update')

              break;
      default:
      console.log('Sei la');

    }
}




})
.listen(3000)
console.log('Server running at http://localhost:3000/')

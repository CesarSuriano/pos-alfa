const mongoose = require( './config' )
const mongoose = require( './model' )


const data = { name: 'Suissamon' }

Model.find( {}, (err, data) => {
  if (err) return console.log('ERRO: ', err)

  return console.log('Listagem:', data)
})

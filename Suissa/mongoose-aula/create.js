const mongoose = require( 'mongoose' )
const Model = require('./model')
 
const data = { name: 'Cesar', age: 21 }
 
Model.create( data, (err, data) => {
  if (err) return console.log('ERRO: ', err)
 
  return console.log('Inseriu:', data)
})
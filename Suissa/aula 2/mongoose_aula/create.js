const mongoose=require('mongoose')
const Model=require('./model')

const data = { name: 'margio',age:42 }

Model.create( data, (err, data) => {
  if (err) return console.log('ERRO: ', err)

  return console.log('Inseriu:', data)
})

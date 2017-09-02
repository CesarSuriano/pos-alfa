const mongoose = require( './config' )

const _schema = {
  name:  String,
  age:Number
}
const schema = new mongoose.Schema(_schema)
const Model = mongoose.model('Pokemon', schema)

const query={age:42}
const mod={name:'Mudeiiiii'}

Model.update( query,mod, (err, data) => {
  if (err) return console.log('ERRO: ', err)

  return console.log('Atualizado:', data.result)
})

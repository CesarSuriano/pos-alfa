const mongoose = require('./config')

const _schema = {
    name: String
}

const query = {age: 666}
const mod = {name: 'mudou'}

Model.update(query, mod, (err, data) => {
    if(err) return console.log("Erro" + err)
    return console.log('Modificou:', data)
})
const mongoose = require('./config')

const _schema = {
    name: String
}

Model.find({}, (err, data) => {
    if(err) return console.log("Erro" + err)
    return console.log('Listagem', data)
})
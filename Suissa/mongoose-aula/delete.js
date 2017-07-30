const mongoose = require('./config')

const _schema = {
    name: String
}

Model.remove({}, (err, data) => {
    if(err) return console.log("Erro" + err)
    return console.log('Removeu:', data.result)
})
const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost/pos-alfa-2017'

mongoose.connect(dbURI)

mongoose.connection.on('connected', () => 
    console.log("Mongoose conectado em " + dbURI)
);

mongoose.connection.on('disconnected', () => 
    console.log("Mongoose desconectado")
);

mongoose.connection.on('open', () => 
    console.log("Mongoose aberto")
);

mongoose.connection.on('error', (err) => 
    console.log("Mongoose connection error:" + err)
);

process.on('SIGINT', () => 
    mongoose.connection.close(() => {
        console.log("Mongoose disconectado e aplicação finalizada")
        process.exit(0)
    })
)

module.exports = mongoose
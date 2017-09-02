const Model = require('./model')

const create = (req, res) => {
  const body = req.body
  console.log("Data:", body)

  Model.create(body, (err, data) => {
    if (err) return console.log('ERRO: ', err)

    return res.json(data)
  })
}

const find = (req, res, query = {}) =>
  Model.find(query, (err, data) => {
    if (err) return console.log('ERRO: ', err)

    return res.json(data)
  })

const findOne = (req, res) =>{
  const query = {
    _id: req.params.id
  }

  return Model.findOne(query, (err, data) => {
    if (err) return console.log('ERRO: ', err)

    return res.json(data)
  })
}

const update = (req, res) => {
  const query = {
    _id: req.params.id
  }

  const mod = req.body

  Model.update( query, mod, (err, data) => {
    if (err) return console.log('ERRO: ', err)

    return res.json(data)
  })
}

const remove = (req,res) => {
  const query = {
    _id: req.params.id
  }

  //const mod = req.body

  Model.remove( query, (err, data) => {
    if (err) return console.log('ERRO: ', err)
  
    return res.json(data)
  })
}

module.exports = {
  create,
  find,
  findOne,
  update,
  remove
} 

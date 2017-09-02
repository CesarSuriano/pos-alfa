module.exports = (Model) => (req, res) => {
    const query = {
        _id: req.params.id
    }

    //const mod = req.body

    Model.remove(query, (err, data) => {
        if (err) return console.log('ERRO: ', err)

        return res.json(data)
    })
}
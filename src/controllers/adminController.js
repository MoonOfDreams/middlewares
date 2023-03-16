module.exports = {
    index: (req, res) => {
        res.send("hola " + req.query.user)
    }
}
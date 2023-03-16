module.exports = (req, res, next) => {
    let usuario = req.query.user
    if (usuario === "Ada" || usuario === "Greta" || usuario === "Vim" || usuario === "Tim") {
        next()
    } else {
        res.send("no tienes los privilegios para ingresar")
    }
}
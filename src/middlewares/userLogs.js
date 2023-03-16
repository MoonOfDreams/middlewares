const path = require("path")
const fs = require("fs")
const logs = path.join(__dirname, "../logs/userLogs.txt")

module.exports = (req, res, next) => {
    fs.appendFileSync(logs, "el usuario ingreso a la ruta: " + req.path + "\n", "utf-8")
    next()
}
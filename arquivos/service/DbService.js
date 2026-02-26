const fs = require("fs")
const dbPath = "service/data/db.json"
let visitas = JSON.parse(fs.readFileSync(dbPath))

const readFile = () => {
    console.log("Reading all file")
    visitas = JSON.parse(fs.readFileSync(dbPath))
    console.log(visitas)
    return visitas
}
const writeFile = (visita) => {
    visitas.push(visita)
    fs.writeFileSync(dbPath, JSON.stringify(visitas))
    console.log("visita salvo")
    return visitas
}
module.exports = {
    readFile,
    writeFile
}

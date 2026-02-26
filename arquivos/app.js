const express = require("express");
const cors = require('cors');
const db = require("./service/DbService");
const app = express();
const port = 8080

app.use(express.urlencoded());
app.use(cors({}));
app.use(express.json())

app.set("view engine", "ejs")

app.get("/", (req, res) => res.render('index'))
app.get("/detalhes", (req, res) => res.render('detalhes'))
app.get("/fotos", (req, res) => res.render('fotos'))
app.get("/contato", (req, res) => res.render('contato', {visitas: db.readFile()}))
app.post("/contato", (req, res) => {
    console.log("Recebi a req")
    console.log(req.body)
    visitas = db.writeFile(req.body)
    res.render("contato", {visitas})
})
app.get("/produto", (req, res) => res.render('produto'))
app.get("/unidade", (req, res) => res.render('unidade'))


app.use((req, res, next) => res.status(404).json({message: "Not found"}))

app.listen(port, () => console.log(`rodando em http://localhost:${port}`));
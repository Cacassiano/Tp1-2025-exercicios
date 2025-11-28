const express = require("express")
const app = express()
const port = 8080

app.use(express.urlencoded());
app.set("view engine", "ejs")

app.get("/", (req, res) => res.render("form"));

app.post("/hello", (req, res) => {
    console.log(req.body)
    const {nome, sobrenome, cidade} = req.body;
    if(!nome || !sobrenome || !cidade) {
        return res.redirect("/");
    } 
    return res.render("hello", {nome, sobrenome, cidade});
})

app.use((req, res, next) => res.redirect("/"))

app.listen(port, () => console.log(`rodando no http://localhost:${port}`))
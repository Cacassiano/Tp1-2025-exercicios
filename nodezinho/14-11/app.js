const express = require("express")
const app = express()
const port = 8080

app.use(express.urlencoded());
app.set("view engine", "ejs")

app.get("/", (req, res) => res.render("form"));

app.get("/hello", (req, res) => {
    const {nome, sobrenome} = req.query;
    if(!nome || !sobrenome) {
        return res.redirect("/");
    } 
    return res.render("hello", {nome, sobrenome});
})

app.use((req, res, next) => res.redirect("/"))

app.listen(port, () => console.log(`rodando no http://localhost:${port}`))
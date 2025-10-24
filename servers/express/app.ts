const express = require("express")
const app = express()
const port = 8080

app.use(express.json())
app.set('view engine', 'ejs')

// Sim, baixei o typescript para colocar os tipos como any 
// pode me julgar

interface RequestQuery {
    query: {
        nome: string,
        idade: number
    }
}

app.get("/",(req:any, res:any) => {
    res.render("index")
})

app.get("/hello", (req:RequestQuery, res:any) => {
    res.render("hello", {nome: req.query.nome, idade: req.query.idade})
});

app.listen(port, (req:any, res:any) => {
    console.log("Ouvindo no URl http://127.0.0.0:8080")
})

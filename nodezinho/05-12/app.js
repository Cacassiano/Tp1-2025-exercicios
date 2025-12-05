const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());


app.get("/", (req, res) => {
    let random = (Math.floor(Math.random() * 100)% 100 ) +1;
    console.log(random);
    
    res.render("index", {resposta: undefined, random});
    
});

app.post("/", (req, res) => {
    const {palpite, random} = req.body;
    resposta = ""
    
    if(parseInt(palpite) == parseInt(random)) {
        resposta = "Acertou o numero era "+random;
    }

    if(parseInt(palpite) > parseInt(random)) {
        resposta = "O meu numero é menor que "+palpite;
    }

    if(parseInt(palpite)< parseInt(random)) {
        resposta = "O meu numero é maior que "+palpite;
        
    }

    res.render("index", {resposta, random});
})

app.use((req, res, next) => res.redirect("/"));

app.listen(8080, () => console.log("Rodando em http://localhost:8080"))
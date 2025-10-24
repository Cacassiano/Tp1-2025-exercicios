const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/soma", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);

    res.render('result', {n1, n2, signal:"+", result: n1+n2});
})

app.get("/sub", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);

    res.render('result', {n1, n2, signal:"-", result: (n1-n2)});
})

app.get("/mult", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);

    res.render('result', {n1, n2, signal:"*", result: (n1*n2)});
})

app.get("/div", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);

    if(n2 == 0) {
        return res.status(400).send("Numero 2 nao pode ser 0")
    }

    res.render('result', {n1, n2, signal:"/", result: (n1/n2)});
})

app.listen(port, () => {
    console.log("Rodando no http://localhost:"+port);
});

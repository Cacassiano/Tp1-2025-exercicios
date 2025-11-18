const express = require("express")
const app = express()

app.set("view engine", "ejs")

let contador = 0

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/contar", (req, res) => {
  contador++
  res.send("Contador: " + contador)
})

app.listen(3000)

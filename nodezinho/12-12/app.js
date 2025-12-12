const express = require('express')
const app = express()
const cors = require("cors")

app.use(express.urlencoded())
app.use(cors());
app.set("view engine", "ejs")
app.get("/", (req, res) => res.render("index"))
app.get("/ola", (req, res) => res.render("ola"))
app.get("/enchendo-linguica", (req, res) => res.render("enchendolinguica"))

app.use((req, res, next) => res.redirect("/"))


app.listen(3000, () => console.log("http://localhost:3000"));
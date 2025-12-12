const express = require('express')
const app = express()
const cors = require("cors")

app.use(express.urlencoded())
app.use(cors());
app.set("view engine", "ejs")
app.get("/", (req, res) => res.render("index"))

app.listen(8080, () => console.log("http://localhost:8080"));
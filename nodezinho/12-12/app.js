const express = require('express')
const app = express()
const cors = require("cors")

app.use(express.urlencoded())
app.use(cors());
app.set("view engine", "ejs")
app.get("/", (req, res) => res.send("Faz o L!"))


app.listen(3000, () => console.log("http://localhost:3000"));
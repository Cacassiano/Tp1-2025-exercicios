const express = require("express")
const port = 8080;
const app = express();

app.use(express.urlencoded());
app.set("view engine", "ejs")

app.get("/", (req, res) => res.render("index"))

app.use((req, res, next) => {
    res.send("Page not found")
})

app.listen(port, () => console.log("http://localhost:"+port))
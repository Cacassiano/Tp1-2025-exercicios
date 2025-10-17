const port = 8000;
const http = require('http');

server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    const [dia, hora] = new Date(Date.now()).toISOString().split("T");
    res.write(`<h1>Dia: ${dia}<br>Hora: ${hora.split(".")[0]}</h1>`);
    res.end();
})

server.listen(port);
console.log(`Servidor funcionando na porta: ${port}`);

const port = 8000;
const http = require('http');

server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    let r1 = Math.random(), r2 = Math.random();
    const [dia, hora] = new Date(Date.now()).toISOString().split("T");
    res.write(`<h1>${r1} + ${r2} = ${r1+r2}</h1>`);
    res.end();
})

server.listen(port);
console.log(`Servidor funcionando na porta: ${port}`);

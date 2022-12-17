const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request", (req, res) => {
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res);
}).listen(8080);


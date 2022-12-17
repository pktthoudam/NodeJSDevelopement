const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on('request', (req, res) => {
    // * read file as normal

    //  fs.readFile('input.txt', (err, data)=>{
    //     if (err) return console.error(err);
    //     res.end(data.toString()) ;
    //  });

    // * read file as stream
    const rstream = fs.createReadStream('input.txt');
    rstream.on('data', (chunkdata) => {
        res.write(chunkdata);
        rstream.on('end', () => {
            res.end() ;
        
        });
        rstream.on('error', (err)=>{
            console.log(err);
            res.end("file not found")
        })
    })

});

server.listen(8080, "127.0.0.1", () => {
    console.log("listening to the port number 8080");
});
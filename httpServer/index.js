
const http = require("http");

const server = http.createServer((req, res)=>{
    // console.log(req.url);
    if (req.url == "/"){
        res.end("hello ! this is from home page");
    }
    else if (req.url == "/contact"){
        res.end("hello ! this is from contactUs page");
    }
    else if (req.url == "/about"){
        res.end("hello !  this is from aboutUs page");
    }
    else{
        res.writeHead(404, {"content-type": "text/html"})
        res.end(" <h1> 404 error pages ! Page not found </h1>")
    }
});

server.listen(8080,"127.0.0.1",()=>{
    console.log("listening to the port number 8080");
});
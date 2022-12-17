const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res)=>{
    if (req.url == "/"){
        res.end("<h1> Home </h1>");
    }
    else if( req.url == "/userApi"){
        fs.readFile(`userApi.json`,"utf8", (err,data) =>{
            if (err){
                console.log("error");
            }
            else{
                console.log("sucess");
                console.log(data);
                res.writeHead(200, {'content-type': 'text/html'});
                res.end(data);
            }
        })
    
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.end("<h1> 404 Page Not Found !</h1>")
    }
});

server.listen(8080, "127.0.0.1", ()=>{
    console.log("listening to the localhost:8080");
})
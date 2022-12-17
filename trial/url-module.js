var http = require('http')
var url = require('url');
var address = 'https://www.youtube.com/watch?v=uyiuYfSAc-A&ab_channel=AdityaMusic';

// Parse the address

var q = url.parse(address, true);
http.createServer(function(req, res){
    res.write(q.hostname );
    res.write(q.pathname);
    res.write(q.search);
    res.write(qdata.ab_channel);
    res.end()

}).listen(8080);

// the parse methods returns an object containing ulr properties

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/

var qdata = q.query;
console.log(qdata.ab_channel);
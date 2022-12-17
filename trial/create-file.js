var fs = require('fs')

fs.appendFile('mynewfile.txt', 'this is the text wrritn by priyakanta thoudam thoudam manuing leikai irnng thokchom thooubal maninpur', function(err){
    if (err) throw err;
    console.log('saved !');
});
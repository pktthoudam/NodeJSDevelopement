var fs = require('fs');;
fs.open('file1.html', 'w', function(err){
    if (err) throw err;
    console.log('open!');
})
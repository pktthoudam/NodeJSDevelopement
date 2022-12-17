const fs = require('fs');

// create a new file

// fs.writeFileSync('read.txt', 'hello this file');


// create a new file or Overwite the file's contents

// fs.writeFileSync('read.txt', 'hello this file update the conntent');

// update the file contents

fs.appendFileSync('updated.txt', 'hello boss ths is my freinf');

// read file

// const data = fs.readFileSync('read.txt', 'utf-8');
// console.log(data);

// rename the file

// fs.renameSync('read.txt', 'updated.txt');

// delete file 

// fs.unlinkSync('read.txt');

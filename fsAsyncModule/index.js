var fs = require('fs');

// * create file

// fs.writeFile('bio.txt', 'file using async', (err)=>{
//     console.log(err);
//     console.log('create file sucessfully')
// });

// * read file

// fs.readFile('bio.txt','utf-8', (err,data)=>{
//     console.log(err);
//     console.log(data);
//     console.log('Readfile sucessfully');
// });

// * update file

fs.appendFile('bio.txt','data to append', (err)=>{
    console.log(" sucessfully append file as ' data to append'");
});

// * delete file

// fs.unlink("bio1.txt", (err)=>{
//     if (err) throw  err; 
//     console.log("sucessfully delete file");
// });
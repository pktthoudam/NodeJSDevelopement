
const fs = require("fs");
const bioData = {
    name: "Priyaknata Thoudam",
    age: 33,
    gender: "male"
};

// // console.log(bioData.name);
// // console.log(bioData.name);
// // console.log(bioData.gender);

// 1. convert to json => done
// 2. add to another file =>done
// 3. read the file 
// 4 again convert to obj 
// 5 show in the console.log 

// // object to json
const jsonData = JSON.stringify(bioData);

// add json data in another file

fs.writeFile("json1.json", jsonData, (err)=>{
    console.log("done")
})

//read file

fs.readFile("json1.json", "utf8", (err, data)=>{
    if (err) throw err;
    const objData =JSON.parse(data)
    console.log(data);
    console.log(objData);
} )
// console.log(jsonData);

// // json to object
 
// const objData =JSON.parse(jsonData);
// console.log(objData.gender);




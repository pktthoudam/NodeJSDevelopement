const path  =  require('path');

console.log(path.dirname('D:/Full Stack/NodeJS Developments/path/index.js') );

console.log(path.extname('D:/Full Stack/NodeJS Developments/path/index.js') );

console.log(path.basename('D:/Full Stack/NodeJS Developments/path/index.js') );

console.log(path.parse('D:/Full Stack/NodeJS Developments/path/index.js') );

// showing name only

var myPath = path.parse('D:/Full Stack/NodeJS Developments/path/index.js');
console.log(myPath.name);
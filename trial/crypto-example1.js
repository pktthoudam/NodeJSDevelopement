// Encryption example using Cipher

const crypto = require("crypto");

const cipher = crypto.createCipher('aes192', 'passw');
var encrypted = cipher.update('Hello ! This is my programme', 'utf8', 'hex');  

encrypted+=cipher.final('hex');

console.log(encrypted);


// Decryption example using Decipher

const decipher = crypto.createDecipher('aes192', 'a password');  
var encrypted = '6647a4b64654988cabd193856bef67b842d803e54fa9af5f043119081b95d9b2';  
var decrypted = decipher.update(encrypted, 'hex', 'utf8');  
decrypted += decipher.final('utf8');  
console.log(decrypted);  
// Encryption Example using Hash and HMAC

const crypto = require("crypto");
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret).update('Hi ! This is Priyakanta Thoudam').digest('hex');

console.log(hash);
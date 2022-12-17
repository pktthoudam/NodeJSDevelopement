const mysql = require("mysql");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "project_ideas",
    port: 3306
});

con.connect((err) => {
    if (err) throw err
    console.log("connected Sucessfully");
});

module.exports.con=con;
const mysql = require("mysql2");

const db = mysql.createConnection({
    host : 'localhost',
    user : 'Your user',
    password : 'Put paassword',
    database:'dataBaseDani'

    });
db.connect();
module.exports = db;
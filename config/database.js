const mysql = require("mysql2");

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'BeatBox93',
    database:'dataBaseDani'

    });
db.connect();
module.exports = db;
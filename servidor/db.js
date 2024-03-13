const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "simple41",
    database: "crud"
});

module.exports = { db };

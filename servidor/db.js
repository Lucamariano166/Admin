// db.js

const mysql = require("mysql");

// Configuração do banco de dados
const dbConfig = {
    host: "localhost",
    user: "root",
    password: "simple41",
    database: "crud"
};

// Criar uma conexão com o banco de dados
const connection = mysql.createConnection(dbConfig);

module.exports = { connection };

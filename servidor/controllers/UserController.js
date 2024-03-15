// controllers/UserController.js
const { connection: db } = require("../db.js");
exports.getAllUsers = (req, res) => {
    const query = "SELECT * FROM usuarios";

    db.query(query, (error, results) => {
        if (error) {
            console.error("Erro ao buscar usuários:", error);
            res.status(500).json({ message: "Erro ao buscar usuários" });
        } else {
            res.status(200).json(results);
        }
    });
};

exports.createUser = (req, res) => {
    const q =
        "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?, ?, ?, ?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.telefone, 
        req.body.dataNascimento, 
    ];

    db.query(q, values, (err, result) => { 
        if (err) {
            console.error("Erro ao criar usuário:", err);
            return res.status(500).json({ message: "Erro ao criar usuário" });
        }

        if (result.affectedRows === 1) {
            return res.status(201).json({ message: "Usuário criado com sucesso", newUser: { nome: req.body.nome, email: req.body.email, telefone: req.body.telefone, dataNascimento: req.body.dataNascimento } });
        } else {
            return res.status(500).json({ message: "Erro ao criar usuário" });
        }
    });
};




// const express = require('express');
// const { addUser, deleteUser, getUsers, updateUser } = require("../controllers/user.js");

// const routes = express.Router();

// // Middleware para analisar o corpo da solicitação como JSON
// routes.use(express.json());

// // Rota de login
// const users = [{
//     id: 1,
//     name: 'Lucas Mariano',
//     email: 'lucas@mariano.com.br',
//     password: '123456'
// }];

// routes.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     const user = users.find(user => user.email === email && user.password === password);
//     if (user) {
//         return res.status(200).json(user);
//     }

//     return res.status(401).json({ message: 'Credenciais inválidas' });
// });

// // Rotas de usuários
// routes.get("/", getUsers);
// routes.post("/", addUser);
// routes.put("/:id", updateUser);
// routes.delete("/:id", deleteUser);

// module.exports = routes;


const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Rotas CRUD para usuários
router.post('/addUser', UserController.createUser);
// router.put('/:id', UserController.updateUser);
//router.delete('/:id', UserController.deleteUser);
router.get('/getUsers', UserController.getAllUsers);

module.exports = router;

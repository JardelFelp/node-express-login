const express = require('express');
const dotenvSafe = require('dotenv-safe');

// Inicializa rotas e leitura do .env
const router = express.Router();
dotenvSafe.load();

// Importa Controllers utilizados na aplicação e Helpers
const UsuarioController = require('../controllers/UsuarioController');
const AuthenticationHelper = require('../helpers/authentication');

router.post('/login', UsuarioController.signIn);

router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

router.post('/usuario', UsuarioController.create);
router.get(
  '/usuario/:id',
  AuthenticationHelper.verifyJWT,
  UsuarioController.findById
);

module.exports = router;

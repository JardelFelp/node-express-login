const Usuario = require('../models/usuario');
const status = require('http-status');
const jwt = require('jsonwebtoken');
const AuthenticationHelper = require('../helpers/authentication');

exports.signIn = async (req, res, next) => {
  try {
    const { email, senha } = req.body;
    // Busca pelo usuário por e-mail
    const users = await findByEmail(email);
    const user = users[0];

    // Verifica se retornou registros e se senhas correspondem
    if (
      !user ||
      (user && AuthenticationHelper.encryptPassword(senha) !== user.senha)
    ) {
      res.status(500).send('Usuário ou senha incorretos!');
    }

    // Cria token e atribui id no token
    const token = jwt.sign({ id: user.usuario_id }, process.env.SECRET, {
      expiresIn: 30000
    });

    // Retorna objeto com token, usuario e auth = true
    return res.status(status.OK).send({ auth: true, user, token });
  } catch (error) {
    return next(error);
  }
};

exports.create = (req, res, next) => {
  const { email, senha } = req.body;

  // Envia e-mail e senha criptografada
  Usuario.create({ email, senha: AuthenticationHelper.encryptPassword(senha) })
    .then(response => {
      if (response) {
        return res.status(status.OK).send(response);
      }
      return res.status(status.NOT_FOUND).send();
    })
    .catch(error => next(error));
};

exports.findById = (req, res, next) => {
  const id = req.params.id;

  Usuario.findByPk(id)
    .then(response => {
      if (response) {
        return res.status(status.OK).send(response);
      }
      return res.status(status.NOT_FOUND).send();
    })
    .catch(error => next(error));
};

const findByEmail = email =>
  new Promise((resolve, reject) =>
    Usuario.findAll({ where: { email } })
      .then(response => resolve(response))
      .catch(error => reject(error))
  );

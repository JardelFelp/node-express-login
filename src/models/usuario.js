const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Usuario = sequelize.define('usuario', {
  id_usuario: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  email: {
    unique: true,
    allowNull: false,
    type: Sequelize.STRING(100),
    validate: {
      len: [5, 100]
    }
  },
  senha: {
    allowNull: false,
    type: Sequelize.STRING(32)
  }
});

module.exports = Usuario;

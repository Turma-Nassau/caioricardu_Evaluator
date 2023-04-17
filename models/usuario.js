const banco_de_dados = require('./banco_de_dados')

const Usuario = banco_de_dados.sequelize.define('usuarios', {

    nome: {
        type: banco_de_dados.Sequelize.STRING(30)
    },

    sobrenome: {
        type: banco_de_dados.Sequelize.STRING(30)
    },

    email: {
        type: banco_de_dados.Sequelize.STRING(50)
    },

    idade: {
        type: banco_de_dados.Sequelize.NUMERIC(2)
    },

    senha: {
        type: banco_de_dados.Sequelize.STRING(30)
    }

})

module.exports = Usuario;

//Usuario.sync({Force: true}) //(força a criar uma tabela)

const banco_de_dados = require('./banco_de_dados')

const Variedade = banco_de_dados.sequelize.define('Variedade', {

    categoria: {
        type: banco_de_dados.Sequelize.STRING
    },

    avaliacao_comentada: {
        type: banco_de_dados.Sequelize.STRING
    }


})

module.exports = Variedade

//Variedade.sync({Force: true}) //(força a criar uma tabela)
const Sequelize = require('sequelize') //sequelize é um facilitador, ele facilita nossa vida quando for gerenciar o banco de dados


//conexão com o banco de dados
const sequelize = new Sequelize('evoluatorbd','root','', {
    host: "localhost",   //onde vamos rodar o servidor
    dialect: 'mysql',     // banco de dados utilizado
    query:{raw:true}
    })

//exportando sequelize e Sequelize
module.exports={
    Sequelize: Sequelize,
    sequelize: sequelize
}

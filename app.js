const express = require("express"); 
const app = express(); //o app chamando o express, usado para executar as sintaxes de códigos
PORT = 8031 //porta
const handlebars = require("express-handlebars");
const Usuario = require("./models/usuario");
const bodyParser = require("body-parser");
const Variedade = require("./models/variedade")

//configurações
    //handlebars
    app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))   // esse main vai ser o template padrão do nosso web
    app.set('view engine', 'handlebars')
    //bodyparser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    //swagger
    swaggerFile = require("./app_docs.json"),
    swaggerUi = require("swagger-ui-express")

//rotas
    //documentação
    app.use('/documento',swaggerUi.serve, swaggerUi.setup(swaggerFile))

    //principal
    app.get('/', (req, res) => {
        res.send('Página principal')
    })
    //cadastro
    app.get('/cadastro', (req, res) => {
        res.render('usuario')
    })
    //categorias
    app.get('/categoria', (req, res) => {
        res.render('variedade')
    })
    //rota para deletar
    //usuario
    app.get('/deletar/:id', function(req,res){
      Usuario.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Usuário excluído com sucesso!")
      }).catch(function(erro){
        res.send("Esse usuário não existe.")
      })
     })
    //variedade
    app.get('/deletarVariedade/:id', function(req,res){
      Variedade.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Variedade deletada com sucesso!")
      }).catch(function(erro){
        res.send("Está variade não existe.")
      })
     })
    //lista de usuarios cadastrados
    //usuario
    app.get('/lista', function(req, res){
        Usuario.findAll({order: [['id', 'DESC']]}).then(function(dados){
        res.render('listagem', {dados: dados})
        })
       })
    //variedade
    app.get('/listaCate', function(req, res){
      Variedade.findAll({order: [['id', 'DESC']]}).then(function(dados){
      res.render('listaCategoria', {dados: dados})
      })
     })
//rota para receber o conteudo do formulario basicamente
    //Recebidos
    // ao trabalhar com o envio de formulário do método POST é importante alterar o tipo da rota para POST
    // post do usuario
    app.post('/adicionar', function(req,res){

        Usuario.create({
          nome: req.body.nome,
          sobrenome: req.body.sobrenome,
          email: req.body.email,
          idade: req.body.idade,
          senha: req.body.senha
        }).then(function(){
          res.redirect('/')    // essa linha vai redirecionar para página principal
        }).catch(function(erro){
          res.send("Houve um erro na criação da reclamação: " + erro)
        })
  
      })
      //post da avaliação
      app.post('/criarCategoria', function(req,res){

        Variedade.create({
          categoria: req.body.categoria,
          avaliacao_comentada: req.body.avaliacao_comentada
        }).then(function(){
          res.redirect('/')    // essa linha vai redirecionar para página principal
        }).catch(function(erro){
          res.send("Houve um erro na criação da reclamação: " + erro)
        })
  
      })
//fim de rotas

//ligação do servidor local
    app.listen(PORT, function() {
       console.log(`Servidor rodando na porta ${PORT}`)
    });


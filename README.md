# Evaluator

> Status: Desenvolvimento 🧑‍💻

### Objetivo:
* Disponibilzar para uma comunidade em diversas categorias, um ambiente seguro onde possam dar opiniões e avaliações sobre filmes.

### Funcionalidades:
* Ajudar e influênciar um determinado público a se expressar da maneira como se sentem relacionado as obras.
* Unir certos grupos que compartilham dos mesmos gostos de maneira objetiva.

## Tecnologias usadas
<table>
  <tr> 
    <td> NodeJS </td>
    <td> javaScript </td>
    <td> MySQL </td>
  </tr>
  <tr>
    <td> 18.15.0 </td>
    <td> ECMAScript 2022 </td>
    <td> 8.0.32 </td>
  </tr>
</table>

## Estrutura de dados:

* Formulário para cadastro de usuários
~~~ const Usuario = banco_de_dados.sequelize.define('usuarios', {

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
~~~

* Criador de categorias de filmes
~~~ const Variedade = banco_de_dados.sequelize.define('Variedade', {

    categoria: {
        type: banco_de_dados.Sequelize.STRING
    },

    avaliacao_comentada: {
        type: banco_de_dados.Sequelize.STRING
    }


})
~~~


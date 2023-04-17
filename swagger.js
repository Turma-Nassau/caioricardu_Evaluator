const swagger_auto_gen = require("swagger-autogen")

const outputFile = "./app_docs.json"
const endpointsFiles = ["./app.js"]


const doc = {
    info: {
        title: "Minhas rotas",
        descrição: "Documentação do projeto Evoluator",
    },
    host: "localhost:8031",
    schemes: ["http"],
}


swagger_auto_gen(outputFile, endpointsFiles, doc);
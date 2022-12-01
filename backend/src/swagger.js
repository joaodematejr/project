const swaggerAutogen = require('swagger-autogen')()

const outputFile = './doc/swagger_output.json'
const endpointsFiles = ['./server.ts']

const doc = {
    info: {
        version: '1.0.0', // by default: '1.0.0'
        title: 'Backend API - Consultar Filmes', // by default: 'REST API'
        description: 'Documentação da API do Backend para o projeto de Consultar Filmes', // by default: ''
    },
    host: 'localhost:9000', // by default: 'localhost:3000'
    basePath: '/', // by default: '/'
    schemes: ['http', 'https'], // by default: ['http']
    consumes: ['application/json'], // by default: ['application/json']
    produces: ['application/json'], // by default: ['application/json']
    tags: [
        // by default: empty Array
        {
            name: '', // Tag name
            description: '', // Tag description
        },
        // { ... }
    ],
    securityDefinitions: {}, // by default: empty object
    definitions: {}, // by default: empty object (Swagger 2.0)
    components: {}, // by default: empty object (OpenAPI 3.x)
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    /* require('./server.ts') */
})
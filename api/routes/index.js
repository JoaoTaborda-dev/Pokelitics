const bodyParser = require('body-parser')
const categorias = require('./categoriasRoutes')
const candidate = require('./candidateRoutes')


module.exports = app => {
  app.use(bodyParser.json(), candidate)
}

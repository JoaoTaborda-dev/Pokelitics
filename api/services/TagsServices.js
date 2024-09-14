const Services = require('./Services')
const database = require('../models')

class TagsService extends Services {
  constructor() {
    super('Tags')
  }
  // métodos especificos do controlador de Tags

  async pegaRegistrosAtivos(where = {}) {
    return database[this.nomeDoModelo].findAll({ where: { ...where } })
  }

  async pegaTodosOsRegistros(where = {}) {
    return database[this.nomeDoModelo]
      .findAll({ where: { ...where } })
  }

  async cancelaTagsEMatriculas(estudanteId) {
    return database.sequelize.transaction(async transacao => {
      await super.atualizaRegistro({ ativo: false }, estudanteId, {
        transaction: transacao
      })
      await this.matriculas.atualizaRegistros(
        { status: 'cancelado' },
        { estudante_id: estudanteId },
        { transaction: transacao }
      )
    })
  }

  async pegaMatriculasPorEstudante(where = {}) {
    const matriculas = await database[this.nomeDoModelo].findOne({
      where: { ...where }
    })
    return matriculas.getAulasMatriculadas()
  }
}

module.exports = TagsService

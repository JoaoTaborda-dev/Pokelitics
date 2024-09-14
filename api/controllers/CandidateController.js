// const database = require('../models')

const Services = require('../services/Services')
const categoriasServices = new Services('Categorias')

class CategoriaController {
  //Busca de todos os niveis
  static async pegaTodosOsCandidatos(req, res) {
    try {
      const todosOsNiveis = await categoriasServices.pegaTodosOsRegistros()
      return res.status(200).json(todosOsNiveis)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //Busca de nivel por id
  static async pegaUmCandidato(req, res) {
    const { id } = req.params
    try {
      const umCandidato = await database.Candidates.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(umCandidato)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //Criação de Registro Nivel
  static async criarCandidato(req, res) {
    const novoCandidato = req.body
    try {
      const novoCandidatoCriado = await database.Candidates.create(novoCandidato)
      return res.status(200).json(novoCandidatoCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //Atualizar um registro
  static async atualizarCandidato(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Candidates.update(novasInfos, { where: { id: Number(id) } })
      const candidatoAtualizado = await database.Candidates.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(candidatoAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //Deletar um Registro
  static async apagaCandidato(req, res) {
    const { id } = req.params

    try {
      await database.candidate.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ mensagem: `id ${id} deletado!` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = CategoriaController

const { Router } = require('express')
const CandidateController = require('../controllers/CandidateController')

const router = Router()

router.get('/candidate', CandidateController.pegaTodosOsCandidatos)
router.get('/candidate/:id', CandidateController.pegaUmCandidato)
router.post('/candidate', CandidateController.criarCandidato)
router.put('/candidate/:id', CandidateController.atualizarCandidato)
router.delete('/candidate/:id', CandidateController.apagaCandidato)

module.exports = router

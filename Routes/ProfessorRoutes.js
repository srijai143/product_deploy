

const professorController = require('../controller/ProfessorController')
const router = require('express').Router()

router.get('/api/professor', professorController.getAllProfessors);
router.get('/api/professor/:id', professorController.getSingleProfessor)
router.post('/api/professor', professorController.addNewProfessor)
router.put('/api/professor', professorController.updateProfessor)
router.delete('/api/professor/:id', professorController.deleteProfessor)

module.exports = router

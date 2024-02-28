const candidateRouter = require('express').Router();
const { protect } = require('../middlewares/Auth.middleware');
const candidateController = require('../controllers/Candidate.controller');


//Create Candidate
candidateRouter.post('/create', protect, candidateController.createCandidate);
//Get all Candidates
candidateRouter.get('/', protect, candidateController.getAllCandidates);
//Get Candidate by ID
candidateRouter.get('/:id', protect, candidateController.getCandidateById);
//Update Candidate
candidateRouter.put('/:id', protect, candidateController.updateCandidateById);
//Delete Candidate
candidateRouter.delete('/:id', protect, candidateController.deleteCandidateById);

module.exports = candidateRouter;
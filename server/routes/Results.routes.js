const resultRouter = require('express').Router();
const { protect } = require('../middlewares/Auth.middleware');
const resultController = require('../controllers/Results.controller');

//Create Result
resultRouter.post('/create', protect, resultController.createResults);
//Get all Results
resultRouter.get('/', protect, resultController.getAllResults);
//Get Result by ID
resultRouter.get('/:id', protect, resultController.getResultsById);
//Update Result
resultRouter.put('/:id', protect, resultController.updateResultById);
//Delete Result
resultRouter.delete('/:id', protect, resultController.deleteResultById);

module.exports = resultRouter;
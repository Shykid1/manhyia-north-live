const pollingRouter = require('express').Router();
const { protect } = require('../middlewares/Auth.middleware');
const pollingController = require('../controllers/Polling.controller');


//Create Polling
pollingRouter.post('/create', protect, pollingController.createPolling);
//Get all Pollings
pollingRouter.get('/', protect, pollingController.getAllPolling);
//Get Polling by ID
pollingRouter.get('/:id', protect, pollingController.getPollingById);
//Update Polling
pollingRouter.put('/:id', protect, pollingController.updatePollingById);
//Delete Polling
pollingRouter.delete('/:id', protect, pollingController.deletePollingById);

module.exports = pollingRouter;
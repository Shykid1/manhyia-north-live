const Polling = require('../models/Polling.model.js')

// Create a polling station
exports.createPolling = async (req, res) => {
  try {
    const newPolling = await Polling.create(req.body)
    res.status(201).json(polling);
  } catch (error) {
    res.status(500).json({error: 'Failed creating Polling Station'})
  }
}

// Get all Polling stations
exports.getAllPolling = async (req, res) => {
  try {
    const polling = await Polling.find()
    res.status(200).json(polling);
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch Polling stations'})
  }
}

// Get polling station by Id
exports.getPollingById = async (req, res) => {
  try {
    const polling = await Polling.findById(req.params.id)

    if (!polling) {
      res.status(404)
      throw new Error('Polling stationnot found')
    }

    res.status(200).json(polling)
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch Polling station'})
  }
}

//Update polling station by Id
exports.updatePollingById = async (req, res) => {
  try {
    const updatedPolling = await Polling.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    if (!updatedPolling) {
      res.status(404)
      throw new Error('Polling station not found')
    }

    res.status(201).json(updatedPolling)
  } catch (error) {
    res.status(500).json({error: 'Failed to update polling station'})
  }
}

// Delete Polling station
exports.deletePollingById = async (req, res) => {
  try {
    const deletedPolling = Polling.findByIdAndDelete(req.params.id)

    if (!deletedPolling) {
      res.status(404)
      throw new Error('Polling station not found')
    }

    res.status(204).json({message: 'Polling deleted successfully'})
  } catch (error) {
    console.error(error)
    res.status(500).json({error: 'Failed deleting Polling station'})
  }
}
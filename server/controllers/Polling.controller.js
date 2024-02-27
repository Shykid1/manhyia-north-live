import PollingModel from '../models/Polling.model.js'

// Create a polling station
async function createPolling (req, res) {
  try {
    const newPolling = await PollingModel.create(req.body)
    res.status(201).json(polling);
  } catch (error) {
    res.status(500).json({error: 'Failed creating Polling Station'})
  }
}

// Get all Polling stations
async function getAllPolling (req, res) {
  try {
    const polling = await PollingModel.find()
    res.status(200).json(polling);
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch Polling stations'})
  }
}

// Get polling station by Id
async function getPollingById (req, res) {
  try {
    const polling = await PollingModel.findById(req.params.id)

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
async function updatePollingById (req, res) {
  try {
    const updatedPolling = await PollingModel.findByIdAndUpdate(req.params.id, req.body, {
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
async function deletePollingById (req, res) {
  try {
    const deletedPolling = PollingModel.findByIdAndDelete(req.params.id)

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

export default {
  createPolling,
  getAllPolling,
  getPollingById,
  updatePollingById,
  deletePollingById
}
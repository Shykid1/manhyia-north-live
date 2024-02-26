import PollingModel from '../models/Polling.model.js'

// Create a polling station
async function createPolling (req, res) {
  const {
    pollingname,
    pollingcode,
    location,
    totalvotes
  } = req.body

  try {
    const newPolling = new PollingModel({
      pollingname,
      pollingcode,
      location,
      totalvotes
    })

    const polling = await newPolling.save()
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
  const {
    pollingname,
    pollingcode,
    location,
    totalvotes
  } = req.body

  try {
    const polling = await PollingModel.findById(req.params.id)

    if (!polling) {
      res.status(404)
      throw new Error('Polling station not found')
    }

    Object.assign(polling, {
      pollingname,
      pollingcode,
      location,
      totalvotes
    })

    await PollingModel.save()

    res.status(201).json(polling)
  } catch (error) {
    res.status(500).json({error: 'Failed to update polling station'})
  }
}

// Delete Polling station
async function deletePollingById (req, res) {
  try {
    const polling = PollingModel.findById(req.params.id)

    if (!polling) {
      res.status(404)
      throw new Error('Polling station not found')
    }

    await PollingModel.deleteOne({_id: req.params.id})

    res.status(204).send()
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
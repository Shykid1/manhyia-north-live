import ResultsModel from '../models/Results.model.js'

// Create results
async function createResults (req, res) {
  try {
    const newResults = await ResultsModel.create(req.body)
    res.status(201).json(newResults)
  } catch (error) {
    res.status(500).json({error: 'Failed creating Results'})
  }
}

// Get all Results
async function getAllResults (req, res) {
  try {
    const results = await ResultsModel.find()
    res.status(200).json(results)
  } catch (error) {
    res.status(500).json({error: 'Failed fetching results'})
  }
}

// Get results by Id
async function getResultsById (req, res) {
  try {
    const result = await ResultsModel.findById(req.params.id)
    
    if (!result) {
      res.status()
      throw new Error('Result not found')
    }

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch result'})
  }
}

// Update Result by Id
async function updateResultById (req, res) {
  try {
    const updatedResult = await ResultsModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    
    if (!updateResultById) {
      res.status(404)
      throw new Error('Result not found')
    }
  } catch (error) {
    res.status(500).json({error: 'Faild to update Result'})
  }
}

//Delete Result by Id
async function deleteResultById (req, res) {
  try {
    const deletedResult = await ResultsModel.findByIdAndDelete(req.params.id)

    if (!deletedResult) {
      res.status(404)
      throw new Error('Result not found')
    }
    res.status(204).json({message: 'Result deleted successfully'})
  } catch (error) {
    res.status(500).json({error: 'Failed to delete Result'})
  }
}

export default {
  createResults,
  getAllResults,
  getResultsById,
  updateResultById,
  deleteResultById
}
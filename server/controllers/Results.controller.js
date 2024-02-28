const Results = require('../models/Results.model')

// Create results
exports.createResults = async (req, res) => {
  try {
    const newResults = await Results.create(req.body)
    res.status(201).json(newResults)
  } catch (error) {
    res.status(500).json({error: 'Failed creating Results'})
  }
}

// Get all Results
exports.getAllResults = async (req, res) => {
  try {
    const results = await Results.find()
    res.status(200).json(results)
  } catch (error) {
    res.status(500).json({error: 'Failed fetching results'})
  }
}

// Get results by Id
exports.getResultsById = async (req, res) => {
  try {
    const result = await Results.findById(req.params.id)
    
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
exports.updateResultById = async (req, res) => {
  try {
    const updatedResult = await Results.findByIdAndUpdate(req.params.id, req.body, {
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
exports.deleteResultById = async (req, res) => {
  try {
    const deletedResult = await Results.findByIdAndDelete(req.params.id)

    if (!deletedResult) {
      res.status(404)
      throw new Error('Result not found')
    }
    res.status(204).json({message: 'Result deleted successfully'})
  } catch (error) {
    res.status(500).json({error: 'Failed to delete Result'})
  }
}
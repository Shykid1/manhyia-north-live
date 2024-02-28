const Candidate = require('../models/Candidate.model.js')

// Create a new candidate
exports.createCandidate = async (req, res) => {
  try {
    const newCandidate = await Candidate.create(req.body)
    res.status(201).json(newCandidate)
  } catch (error) {
    res.status(500).json({error: 'Failed to create new Candidate'})
  }
}

// Get all Candidtates
exports.getAllCandidates = async (req, res) => {
  try {
    const candidtes = await Candidate.find();
    res.status(200).json(candidtes)
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch all Candidates'})
  }
}

// Get a Candidate by Id
exports.getCandidateById = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id)
    if (!candidate) {
      res.status(404)
      throw new Error('Candidate not found')
    }
    res.status(200).json(candidate)
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch the Candidate'})
  }
}

// Update a Candidate by Id
exports.updateCandidateById = async (req,res)  =>{

  try {
    const updatedCandidate = await Candidate.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    if (!updatedCandidate) {
      res.status(404)
      throw new Error('Candidate not found')
    }
    res.status(201).json(updatedCandidate)
  } catch (error) {
    res.status(500).json({error: 'Failed to update the Candidate'})
  }
}

// Delete a Candidate by Id
exports.deleteCandidateById = async (req, res) => {
  try {
    const deletedCandidate = await Candidate.findByIdAndDelete(req.params.id)

    if (!deletedCandidate) {
      res.status(404)
      throw new Error('Candidate not found')
    }

    res.status(204).json({message: 'Candidate deleted successfully'})
  } catch (error) {
    console.error(error)
    res.status(500).json({error: 'Failed to delete Candidate'})
  }
}
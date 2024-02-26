import CandidateModel from '../models/Candidate.model.js'

// Create a new candidate
export async function createCandidate (req, res) {
  const {
    image,
    fullname,
    party,
    age,
    biography,
    manifesto,
    candidacy
  } = req.body

  try {
    const newCandidate = new CandidateModel({
      image,
      fullname,
      party,
      age,
      biography,
      manifesto,
      candidacy
    });

    await newCandidate.save();
    res.status(201).json(newCandidate)
  } catch (error) {
    res.status(500).json({error: 'Failed to create new Candidate'})
  }
}

// Get all Candidtates
export async function getAllCandidates (req, res) {
  try {
    const candidte = await CandidateModel.find();
    res.status(200).json(candidte)
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch all Candidates'})
  }
}

// Get a Candidate by Id
export async function getCandidateById (req, res) {
  try {
    const candidate = await CandidateModel.findById(req.params.id)
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
export async function updateCandidateById (req,res) {
  const {
    image,
    fullname,
    party,
    age,
    biography,
    manifesto,
    candidacy
  } = req.body

  try {
    const candidate = await CandidateModel.findById(req.params.id)

    if (!candidate) {
      res.status(404)
      throw new Error('Candidate not found')
    }

    candidate.image = image
    candidate.fullname = fullname
    candidate.party = party
    candidate.age = age
    candidate.biography = biography
    candidate.manifesto = manifesto
    candidate.candidacy = candidacy

    await candidate.save();
    res.status(201).json(candidate)
  } catch (error) {
    res.status(500).json({error: 'Failed to update the Candidate'})
  }
}

// Delete a Candidate by Id
export async function deleteCandidateById (req, res) {
  try {
    const candidate = await CandidateModel.findById(req.params.id)

    if (!candidate) {
      res.status(404)
      throw new Error('Candidate not found')
    }
    await CandidateModel.deleteOne({_id: req.params.id})
  } catch (error) {
    res.status(500).json({error: 'Failed to delete Candidate'})
  }
}
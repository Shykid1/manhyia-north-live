import mongoose from 'mongoose'

const ResultsSchema = new mongoose.Schema({
  pollingstation :{
    type: mongoose.Types.ObjectId,
    required: true,
    trim: true
  },
  cadidate:{
    type: mongoose.Types.ObjectId,
    required: true,
    trim:true
  },
  votes:{
    type: Number,
    required: true,
    default: 0,
  },
}, 
{timestamps: true}
);

const Results = mongoose.models.Results || mongoose.model('Results', ResultsSchema)

module.exports = Results;
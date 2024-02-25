import mongoose from 'mongoose'

const candidateSchema = new mongoose.Schema({
  image:{
    type: String,
    trim: true,
    required: true,
    default: ''
  },
  fullname: {
    type: String,
    required: true
  },  
  party: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  biography: {
    type: String,
    required: true
  },
  manifesto: {
    type: String,
    required: true
  },
  candidacy: {
    type: String,
    required: true,
    enums: ['Presidential', 'Paliamentary']
  }
},
{timestamps: true}
)

const Candidate = mongoose.models.Candidate || mongoose.model("Candidate", candidateSchema)

module.exports = Candidate
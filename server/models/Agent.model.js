const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  othername: {
    type: String,
    trim: true,
    default: ''
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  },
  pollingcode: {
    type: mongoose.Types.ObjectId,
    ref: "PollingStation",
    required: true
  }
},
{timestamps: true} 
)

const Agent = mongoose.models.Agent || mongoose.model("Agent", agentSchema)

module.exports = Agent;
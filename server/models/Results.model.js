const mongoose = require("mongoose");

const ResultsSchema = new mongoose.Schema(
  {
    electoralName: { type: String, required: true },
    electoralCode: { type: String, required: true },
    pollingName: { type: String, required: true },
    totalVotes: { type: Number, required: true },
    presidentialVotes: [
      {
        candidateName: { type: String, required: true },
        votes: { type: Number, required: true },
      },
    ],
    parliamentaryVotes: [
      {
        candidateName: { type: String, required: true },
        votes: { type: Number, required: true },
      },
    ],
    feedback: {
      agentName: { type: String, required: true },
      remarks: { type: String },
      challenges: { type: String },
    },
  },
  { timestamps: true }
);

const Results =
  mongoose.models.Results || mongoose.model("Results", ResultsSchema);

module.exports = Results;

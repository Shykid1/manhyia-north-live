const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      trim: true,
      default: "",
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    othername: {
      type: String,
      trim: true,
      default: "",
    },
    phone: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pollingcode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Agent = mongoose.models.Agent || mongoose.model("Agent", agentSchema);

module.exports = Agent;

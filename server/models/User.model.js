import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enums: ['Admin', 'Agent']
  }
})

const User = mongoose.models.User || mongoose.model("User", userSchema);

const adminSchema = new mongoose.Schema({
  image: {
    type: String,
    trim: true
  },
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
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  }
})

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema)

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
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  },
  pollingStaionId: {
    type: mongoose.Types.ObjectId,
    ref: "PollingStation",
    required: true
  }
},
{timestamps: true} 
)

const Agent = mongoose.models.Agent || mongoose.model("Agent", agentSchema)

module.exports = {
  User,
  Admin,
  Agent
}
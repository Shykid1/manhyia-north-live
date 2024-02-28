const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
  image: {
    type: String,
    trim: true,
    default: ''
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
    default: ''
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  }
})

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema)

module.exports = Admin;
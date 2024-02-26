import mongoose from 'mongoose'


const PollingStationSchema = new mongoose.Schema({
  pollingname: {
    type: String,
    required: true,
    trim: true
  },
  pollingcode:{
    type: String,
    required: true,
    trim: true
  },
  location: {
    city:{
      type: String,
      trim: true,
      required: true
    },
    electoralarea:{
      type: String,
      trim: true,
      required: true
    },
    region:{
      type: String,
      trim: true,
      required: true
    }
  },
  totalvotes:{
    type: Number,
    required: true,
    default: 0,
  },

},
{timestamps : true}
)

const PollingStation = mongoose.models.PollingStationSchema || mongoose.model('PollingStation', PollingStationSchema)

module.exports = PollingStation;
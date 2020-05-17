let mongoose = require('mongoose')

let schema = new mongoose.Schema({
  questions: {
    type: [Number],
    required: true
  },
  answers: {
    type: [String],
    required: true,
    text: true
  },
  status: String,
  lastChange: {
    type: Date,
    default: Date.now
  },
  reviewedBy: mongoose.SchemaTypes.ObjectId
})

module.exports = mongoose.model('app', schema)
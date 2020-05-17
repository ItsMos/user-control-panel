let mongoose = require('mongoose')

let accountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  role: String,
  verified: false,
  quizPassed: false,
  lastQuizAttempt: Date,
  quizSubmitted: Boolean,
  
  adminStats: {
    type: {
      appsHandled: {
        type: Number,
        default: 0
      }
    },
    required: false
  }
})

module.exports = mongoose.model('account', accountSchema)
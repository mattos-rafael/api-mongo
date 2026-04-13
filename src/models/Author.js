const mongoose = require('mongoose')

const authorSchema = {
  name: {
    type: String,
    require: [true, 'Name is required'],
    trim: true
  },
  country: {
    type: String,
    default: "unknown"
  },
  birthDate: {
    type: Number
  }
}

module.exports = mongoose.model("Author", authorSchema)
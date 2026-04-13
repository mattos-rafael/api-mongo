const mongoose = require("mongoose")

const ALLOWED_GENRE = ['Novela historica', 'aventura', 'filosofia', 'distopia', 'terror']

const bookSchema = {
  title: {
    type: String,
    require: [true, "The title is required"],
    trim: true
  },
  genre: {
    type: String,
    require: [true, "The genre is required"],
    trim: true,
    enum: {
      values: ALLOWED_GENRE
    }
  },
  publishedYear: {
    type: Number,
    require: [true, "The published year is required"],
    trim: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, //O tipo que precisamos para poder fazer populate
    ref: "Author" //A referencia do Schema
  }
}

module.exports = mongoose.model("Book", bookSchema)
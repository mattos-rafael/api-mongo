const Book = require('../models/Books')
const Author = require('../models/Author')

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({}).populate("author", "name country birthDate")
    res.json(books)

  } catch(err) {
    console.log(err)

  }
  
}

// const getBookId = async (req, res) => {

// }

const createBook = async (req, res) => {
  try {
    const author = await Author.findById(req.body.author)

    if (!author) {
      res.status(404).json({msg: "Author dosen't exist"})
    }

    const book = await Book.create(req.body)
    res.status(201).json(book)

  } catch(err) {
    console.log(err)

  }
  
}

module.exports = {
  getBooks,
  // getBookId,
  createBook,
  // updateBook,
  // deleteBook
}
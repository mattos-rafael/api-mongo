const { log } = require('console')
const Author = require('../models/Author')

const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find({})
    res.json(authors)

  } catch(err) {
    console.log(err)

  }
  
}

const getAuthorsId = async (req, res) => {
  try {
    const id = req.params.id
    const author = await Author.findById(id)
    if (!author) {
      res.status(404).json({msg: "The user dosen't exist"})
    }
    res.status(200).json(author)

  } catch(err) {
    console.log(err)

  }
  
}

const createAuthors = async (req, res) => {
  try {
    const newAuthor = req.body
    const author = await Author.create(newAuthor)

    res.status(201).json(author)

  } catch(err) {
    console.log(err);
    
  }
}

const updateAuthor = async (req, res) => {
  try {
    const id = req.params.id
    const updatedAuthor = req.body
    const author = await Author.findByIdAndUpdate(id, updatedAuthor, {
      new: true,
      runValidators: true
    })

    res.status(201).json(author)

  } catch(err) {
    console.log(err);
    
  }
}

const deleteAuthor = async (req, res) => {
  try {
    const id = req.params.id
    const deletedAuthor = await Author.findByIdAndDelete(id)

    res.status(200).json(deleteAuthor)

  } catch(err) {
    console.log(err);
    
  }
}

module.exports = {
  getAuthors,
  getAuthorsId,
  createAuthors,
  updateAuthor,
  deleteAuthor
}
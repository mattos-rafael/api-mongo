const express = require("express")
const router = express.Router()
const {getBooks, createBook, getBookId, updateBook, deleteBook} = require("../controllers/book.controller")

router.get('/books', getBooks)
router.get('/books/:id', getBookId)
router.post('/books', createBook)
router.put('/books/:id', updateBook)
router.delete('/books/:id', deleteBook)

module.exports = router
const express = require("express")
const router = express.Router()
const {getAuthors, createAuthors, getAuthorsId, updateAuthor, deleteAuthor} = require("../controllers/author.controller")

router.get('/authors', getAuthors)
router.get('/authors/:id', getAuthorsId)
router.post('/authors', createAuthors)
router.put('/author/:id', updateAuthor)
router.delete('/author/:id', deleteAuthor)

module.exports = router
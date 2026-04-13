const express = require("express")
const app = express()
const authorRoutes = require('./routes/author.routes')
const bookRoutes = require('./routes/books.routes')
const connectDB = require('./config/db')

require('dotenv').config()

const PORT = 3000

app.use(express.json())

app.get("/", (req, res)=> {
    res.send("It works")
})

app.use("/api", authorRoutes)
app.use("/api", bookRoutes)

app.use((req, res) => {
  res.status(404).json({error: "the page dont exists"})
})

connectDB()

app.listen(PORT, () => { console.log(`listening on port ${PORT}`);
})
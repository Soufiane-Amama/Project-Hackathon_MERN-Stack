require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/user')
const transactionRoutes = require('./routes/transactions')

// express app 
const app = express()

const PORT = process.env.PORT || 8000;


// middleware
app.use(express.json())

app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// routes
app.use('/api/user', userRoutes)
app.use('/api/transactions', transactionRoutes)

app.get('/', (req, res)=>{
    res.status(200).json({ message: "Hello World !"})
})


// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('connected to database')

// listen for requests
app.listen(PORT, () => {
  console.log('listening for requests on port', PORT)
})

})
.catch((err) => {
  console.log(err)
}) 

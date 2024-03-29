require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const userRoutes = require('./routes/user')
const transactionRoutes = require('./routes/transactions')
const truckRoutes = require('./routes/truck')
const shopRoutes = require('./routes/shop')


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
app.use('/api/truck', truckRoutes)
app.use('/api/shop', shopRoutes)



app.get('/test', (req, res) => {
  res.json({ mss:'Hello RBS TEAM !'});
});


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

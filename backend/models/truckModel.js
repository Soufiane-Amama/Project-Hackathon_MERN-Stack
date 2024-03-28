const mongoose = require('mongoose')

const Schema = mongoose.Schema


const truckSchema = new Schema({
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true 
    },
    fullName: {
        type: String,
        required: true
      },
    typeOfItems: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    comments: {
        type: String
      }
  }, { timestamps: true }) 
  
  module.exports = mongoose.model('Truck', truckSchema)
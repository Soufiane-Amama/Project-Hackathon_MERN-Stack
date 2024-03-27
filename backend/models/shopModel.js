const mongoose = require('mongoose')

const Schema = mongoose.Schema


const shopSchema = new Schema({
    imagePath: { 
      type: String
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    points: {
      type: Number,
      required: true
    },
  }, { timestamps: true }) 
  
  module.exports = mongoose.model('Shop', shopSchema)
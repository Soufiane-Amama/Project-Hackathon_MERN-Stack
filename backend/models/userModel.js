const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true
  },
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  points: { 
    type: Number, 
    default: 0 
  }
})


// static signup method
userSchema.statics.signup = async function(fullName, phoneNumber, country, city, email, password) { 

  // validation
  if (!fullName || !phoneNumber || !country || !city || !email || !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) { 
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) { 
    throw Error('Password not strong enough')
  }

  const mailExists = await this.findOne({ email }) 
  const phoneExists = await this.findOne({ phoneNumber }) 

  if (mailExists || phoneExists) {
    throw Error('Email or Phone number already in use')
  }

  const salt = await bcrypt.genSalt(10) 
  const passwordHash = await bcrypt.hash(password, salt)

  const user = await this.create({ fullName, phoneNumber, country, city, email, password: passwordHash })

  return user
}


// static login method
userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email }) // find user
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password) // true or false
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}


// static recovery method
userSchema.statics.recovery  = async function(email) {

  if (!email) {
    throw Error('The field must be filled out')
  }

  const user = await this.findOne({ email }) // find user
  if (!user) {
    throw Error('Incorrect email')
  }

  return user
}


module.exports = mongoose.model('User', userSchema)
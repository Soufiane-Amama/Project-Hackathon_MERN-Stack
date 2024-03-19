const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


const createToken = (_id) => { 
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({ fullName: user.fullName, phoneNumber: user.phoneNumber, country: user.country, city: user.city, email , token })
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {fullName, phoneNumber, country, city, email, password} = req.body

  try {
    const user = await User.signup(fullName, phoneNumber, country, city, email, password) 

        // create a token
        const token = createToken(user._id)

    res.status(200).json({ fullName, phoneNumber, country, city, email , token })
  } catch (error) { 
    res.status(400).json({error: error.message})
  }
}


module.exports = { signupUser, loginUser }
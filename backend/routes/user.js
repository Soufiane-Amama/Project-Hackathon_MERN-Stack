const express = require('express')

// controller functions
const { loginUser, signupUser, accountRecovery, confirmationCode, getUsers, deleteUser } = require('../controllers/userController')

// express router 
const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// account recovery route
router.post('/recovery', accountRecovery)

// confirmation code route
router.post('/confirmation', confirmationCode)

// Get all users 
router.get('/', getUsers)

// delete a user
router.delete('/', deleteUser)



module.exports = router
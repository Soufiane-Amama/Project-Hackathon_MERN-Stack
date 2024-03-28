const express = require('express')
const {
    getRequestsTrucks,
    getRequestsTrucksOfAdmin,
    createRequestTruck
} = require('../controllers/truckController')
const requireAuth = require('../middleware/requireAuth')

// express router 
const router = express.Router()

// require auth for all workout routes - وسيطة المصادقة 
// router.use(requireAuth)



// GET all requests Trucks
router.get('/', getRequestsTrucks)

// Get all requests Trucks of the admin
router.get('/of-admin', getRequestsTrucksOfAdmin)

// POST a new request Truck
router.post('/', createRequestTruck)



module.exports = router
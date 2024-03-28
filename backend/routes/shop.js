const express = require('express')
const {
    createPurchaseOrder,
    getAllProduct,
    createProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/shopController')
const requireAuth = require('../middleware/requireAuth')

// express router 
const router = express.Router()

// require auth for all workout routes - وسيطة المصادقة 
// router.use(requireAuth)


// POST a new Purchase Order
router.post('/', createPurchaseOrder)


// GET all Products
router.get('/', getAllProduct)

// Add a product
router.post('/of-admin', createProduct)

// delete  a product
router.delete('/of-admin', deleteProduct)

// update a product
router.patch('/of-admin', updateProduct)



module.exports = router
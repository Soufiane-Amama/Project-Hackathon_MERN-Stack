const express = require('express')
const {
    getTransactions,
    createTransaction,
    deleteTransaction,
    updateTransaction
} = require('../controllers/transactionController')
const requireAuth = require('../middleware/requireAuth')

// express router 
const router = express.Router()

// require auth for all workout routes - وسيطة المصادقة 
router.use(requireAuth)


// GET all transactions
router.get('/', getTransactions)

// POST a new transaction
router.post('/', createTransaction)

// DELETE a transaction
router.delete('/:id', deleteTransaction)

// UPDATE a transaction
router.patch('/:id', updateTransaction)

module.exports = router
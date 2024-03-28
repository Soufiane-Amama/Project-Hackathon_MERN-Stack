const express = require('express')
const {
    getTransactions,
    deleteTransaction,
    getTransactionsOfAdmin,
    increaseUserPoints,
    updateAcceptedTransactions
} = require('../controllers/transactionController')
const requireAuth = require('../middleware/requireAuth')

// express router 
const router = express.Router()

// require auth for all workout routes - وسيطة المصادقة 
// router.use(requireAuth)


// GET all transactions
router.get('/', getTransactions)

// POST a new transaction
// router.post('/', createTransaction)

// DELETE a transaction
router.delete('/', deleteTransaction)

// UPDATE a transaction
router.patch('/of-admin', increaseUserPoints)

// Get all transactions of the admin
router.get('/of-admin', getTransactionsOfAdmin)


// UPDATE accepted transaction
router.use('/', async (req, res) => {
    try {
        await updateAcceptedTransactions(req, res);
    } catch (error) {
        console.error('Error updating transactions:', error);
        res.status(500).json({ error: 'حدث خطأ أثناء تحديث المعاملات' });
    }
})

module.exports = router
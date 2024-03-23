const Transaction = require('../models/transactionModel')
const User = require('../models/userModel')
const mongoose = require('mongoose')
const { use } = require('../routes/user')

// get all transactions
const getTransactions = async (req, res) => {
  const userId = req.user._id

  const transactions = await Transaction.find({userId}).sort({createdAt: -1})

  res.status(200).json(transactions)
}


// // create a new transaction
// const createTransaction = async (req, res) => {
//     const { transactionType, amount } = req.body
  
//     // add to the database
//     try {
//       const user_id = req.user._id
  
//       const transaction = await Transaction.create({ 
//         userId: user_id,
//         transactionType: transactionType,
//         amount: amount,
//         status: 'معلقة'
//       }) 
//       res.status(200).json(transaction)
//     } catch (error) {
//       res.status(400).json({ error: error.message })
//     }
//   }

// create a new transaction
const createTransaction = async (req, res) => {
    const { transactionType, amount } = req.body
  
    // add to the database
    try {
        const user_id = req.user._id

        const user = await User.findById(user_id);
        
        if (transactionType === 'شراء من المتجر') {

            if (user.points < amount) {
                return res.status(400).json({ message: 'نقاطك غير كافية لإتمام هذه العملية' });
            }
            transaction.status = 'تمت';
            await transaction.save();

            user.points -= amount; 
            await user.save();
        }

        const transaction = await Transaction.create({ 
            userId: user_id,
            transactionType: transactionType,
            amount: amount,
            status: 'معلقة'
        }); 
        

        res.status(200).json(transaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



// delete a transaction
const deleteTransaction = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such transaction'})
    }
  
    const transaction = await Transaction.findOneAndDelete({_id: id})
  
    if(!transaction) {
      return res.status(400).json({error: 'No such transaction'})
    }
  
    res.status(200).json(transaction)
  }


// update a transaction
  const updateTransaction = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such transaction'})
    }
  
    const transaction = await Transaction.findOneAndUpdate({_id: id}, { ...req.body }) 
  
    if (!transaction) {
      return res.status(400).json({error: 'No such transaction'})
    }
  
    res.status(200).json(transaction)
  }


module.exports = {
    getTransactions,
    createTransaction,
    deleteTransaction,
    updateTransaction
}
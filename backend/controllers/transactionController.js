const Transaction = require('../models/transactionModel')
const User = require('../models/userModel')
const mongoose = require('mongoose')
const cron = require('node-cron');


// get all transactions of the user
const getTransactions = async (req, res) => {
  const userId = req.user._id

  const transactions = await Transaction.find({userId}).sort({createdAt: -1})

  res.status(200).json(transactions)
}


// Get all transactions of the admin
const getTransactionsOfAdmin = async (req, res) => {
    const transactions = await Transaction.find({}).sort({createdAt: -1})
  
    res.status(200).json(transactions)
  }
  


// delete a transaction
const deleteTransaction = async (req, res) => {
    const { transactionId  } = req.body
  
    if (!mongoose.Types.ObjectId.isValid(transactionId )) {
      return res.status(400).json({error: 'No such transaction'})
    }
  
    const transaction = await Transaction.findOneAndDelete({_id: transactionId})
  
    if(!transaction) {
      return res.status(400).json({error: 'No such transaction'})
    }
  
    res.status(200).json(transaction)
}



// update a transaction  *** معالج معلق
const updateTransaction = async (req, res) => {
    const { transactionId } = req.body
  
    if (!mongoose.Types.ObjectId.isValid(transactionId)) {
      return res.status(400).json({error: 'No such transaction'})
    }
  
    const transaction = await Transaction.findOneAndUpdate({_id: transactionId}, { ...req.body }) 
  
    if (!transaction) {
      return res.status(400).json({error: 'No such transaction'})
    }
  
    res.status(200).json(transaction)
}

// =============================================================



// تحديث حالة المعاملات المقبولة بعد مرور 24 ساعة
const updateAcceptedTransactions = cron.schedule('0 0 * * *', async (req, res) => {
  try {
      // العثور على المعاملات التي تحتاج إلى التحديث (بالحالة "على الطريق" وبتاريخ الإنشاء الأقدم من 24 ساعة)
      const transactionsToUpdate = await Transaction.find({
          status: 'على الطريق',
          createdAt: { $lt: new Date(Date.now() - 24 * 60 * 60 * 1000) }
      });

      // تحديث حالة المعاملات المقبولة إلى "تمت"
      const updatedTransactions = await Promise.all(transactionsToUpdate.map(async (transaction) => {
          transaction.status = 'تمت';
          return await transaction.save();
      }));

      console.log('Updated transactions:', updatedTransactions);

      res.status(200).json({ message: 'تم تحديث المعاملات بنجاح', transactions: updatedTransactions });
  } catch (error) {
      console.error('Error updating transactions:', error);
      res.status(500).json({ error: 'حدث خطأ أثناء تحديث المعاملات' });
  }
}, {
  scheduled: true,
  timezone: 'UTC' // تحديد منطقة التوقيت
});


// هذا المعالج لتعديل حالة المعاملة اذا قبلت من المشرف وارسال النقاط الى المستخدم
const increaseUserPoints = async (req, res) => {
  const {transactionId, userId, pointsToAdd } = req.body
  try {
              // تحديث حالة المعاملة إلى "على الطريق"
              const updatedTransaction = await Transaction.findByIdAndUpdate(
                  transactionId,
                  { status: 'على الطريق' },
                  { amount: pointsToAdd },
                  { new: true }
              );

      // ابحث عن المستخدم بمعرف الـID وقم بتحديث حقل النقاط
      const updatedUser = await User.findOneAndUpdate(
          { _id: userId }, // شرط البحث
          { $inc: { points: pointsToAdd } }, // زيادة قيمة النقاط بالمقدار المحدد
          { new: true } // الحصول على المستند المحدث بعد التحديث
      );

      console.log('User points updated:', updatedUser);
      res.status(200).json({ message: 'تم تحديث نقاط المستخدم بنجاح', updatedUser, updatedTransaction });
  } catch (error) {
      console.error('Error updating user points:', error);
      res.status(500).json({ error: 'حدث خطأ أثناء تحديث نقاط المستخدم' });
  }
};



module.exports = {
    getTransactions,
    deleteTransaction,
    getTransactionsOfAdmin,
    increaseUserPoints,
    updateAcceptedTransactions
}
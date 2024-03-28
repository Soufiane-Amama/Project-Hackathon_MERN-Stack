const Transaction = require('../models/transactionModel')
const User = require('../models/userModel')
const Shop = require('../models/shopModel')

const mongoose = require('mongoose')



// GET all Products
const getAllProduct = async (req, res) => {
    const products = await Shop.find({}).sort({createdAt: -1})
  
    res.status(200).json(products)
}

// Add a product
const createProduct = async (req, res) => {
    const { imagePath, title, description, points } = req.body;

    try {
        const newProduct = await Shop.create({ imagePath, title, description, points });
        

        res.status(201).json({ message: 'تمت إضافة المنتج بنجاح', product: newProduct });
    } catch (error) {
        res.status(400).json({ error: 'حدثت مشكلة أثناء إضافة المنتج' });
    }
} 


// delete  a product
const deleteProduct = async (req, res) => {
    const { productId } = req.body
  
    if (!mongoose.Types.ObjectId.isValid(productId)) { // التحقق اذا كان المعرف صالح ام لا
      return res.status(400).json({error: 'No such product'})
    }
  
    const product = await Shop.findOneAndDelete({_id: productId})
  
    if(!product) {
      return res.status(400).json({error: 'No such product'})
    }
  
    res.status(200).json(product)
}


// update a product
const updateProduct = async (req, res) => {
    const { productId } = req.body
  
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({error: 'No such product'})
    }
  
    const product = await Shop.findOneAndUpdate({_id: productId}, { ...req.body }) 
  
    if (!product) {
      return res.status(400).json({error: 'No such product'})
    }
  
    res.status(200).json(product)
}


// create Purchase Order
const createPurchaseOrder = async (req, res) => {
    const { userId, amount } = req.body
    
    // add to the database
    try {
        // const user_id = req.user._id
        const user = await User.findById(userId);
        
        
            if (user.points < amount) {
                return res.status(400).json({ message: 'نقاطك غير كافية لإتمام هذه العملية' });
            }
            user.points -= amount; 
            await user.save();
        
        const transaction = await Transaction.create({ 
            userId: userId,
            transactionType: 'شراء من المتجر',
            amount: amount, // كمية المنتقصة
            status: 'تمت'
        }); 
        
        res.status(200).json(transaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



module.exports = {
    createPurchaseOrder,
    getAllProduct,
    createProduct,
    deleteProduct,
    updateProduct
}
const mongoose = require('mongoose')

const Schema = mongoose.Schema


const transactionSchema = new Schema({
    userId: { 
        type: String, 
        required: true 
    },
    transactionType: { 
        type: String, 
        enum: ['شراء من المتجر', 'شاحنة إعادة التدوير', 'خزانة إعادة التدوير'], 
        required: true 
    },
    amount: { 
        type: Number, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['تمت', 'على الطريق', 'ألغيت', 'معلقة'], 
        required: true 
    }
}, { timestamps: true });

// إنشاء النموذج Model
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;

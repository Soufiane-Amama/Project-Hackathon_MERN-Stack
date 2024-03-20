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
    transactionDate: { 
        type: Date, 
        default: Date.now 
    },
    paymentMethod: { 
        type: String 
    },
    status: { type: String, 
        enum: ['processing', 'Accepted', 'Rejected'], 
        required: true 
    }
}, { timestamps: true });

// إنشاء النموذج Model
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;

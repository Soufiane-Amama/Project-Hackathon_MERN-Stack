const Transaction = require('../models/transactionModel')
const Truck = require('../models/truckModel')

// GET all requests Trucks  of the user
const getRequestsTrucks = async (req, res) => {
  const userId = req.user._id

  const requestsTrucks = await Truck.find({userId}).sort({createdAt: -1})

  res.status(200).json(requestsTrucks)
}

// Get all requests Trucks of the admin
const getRequestsTrucksOfAdmin = async (req, res) => {
  const requestsTrucks = await Truck.find({}).sort({createdAt: -1})

  res.status(200).json(requestsTrucks)
}


// create a new request Truck
const createRequestTruck = async (req, res) => {
    const { userId, fullName, typeOfItems, date, place, comments } = req.body


    let emptyFields = [] // مصفوفة لتخزين الحقول الفارغة التي تم ارسالها مع الطلب 

    if (!fullName) {
      emptyFields.push('full name')
    }
    if (!typeOfItems) {
      emptyFields.push('type of items')
    }
    if (!date) {
      emptyFields.push('date')
    }
    if (!place) {
        emptyFields.push('place')
    }
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    // add to the database
    try {
        // const user_id = req.user._id
        
        const truck = await Truck.create({ 
          userId,
          fullName,
          typeOfItems,
          date,
          place,
          comments
        });

        const transaction = await Transaction.create({ 
            userId: userId,
            transactionType: 'شاحنة إعادة التدوير',
            amount: 0,
            status: 'معلقة'
        }); 
        
        res.status(200).json({transaction, truck});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


module.exports = {
    getRequestsTrucks,
    getRequestsTrucksOfAdmin,
    createRequestTruck
}
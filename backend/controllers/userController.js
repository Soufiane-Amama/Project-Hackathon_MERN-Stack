const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const { createTransporter, createMailOptions } = require('../helpers/email');
const sendEmail = require('../helpers/emailService');

const createToken = (_id) => { 
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' }) 
}


// ========================================= 
// إنشاء رمز تأكيد عشوائي من 4 أرقام
const generateVerificationCode = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

// استخدام الدالة لإنشاء رمز تأكيد فريد من 4 أرقام
let verificationCode = generateVerificationCode();
// ========================================= 





// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({ 
      _id: user._id, 
      fullName: user.fullName, 
      phoneNumber: user.phoneNumber, 
      country: user.country, 
      city: user.city, 
      points: user.points, 
      email, 
      token
    })
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


// signup a user
const signupUser = async (req, res) => {
  const {fullName, phoneNumber, country, city, email, password} = req.body

  try {


        // ارسال رسالة الى الايميل الحقيقي
        const to = email;
        const subject = 'رسالة ترحيب';
        const text = `
        مرحبا ${fullName} 
        مرحبا بك في تطبيقنا
        `;
        sendEmail(to, subject, text);

        
        // تجهيز الرسالة تجريبية
        // const transporter = createTransporter();
        // const mailOptions = createMailOptions(email, verificationCode);

        // إرسال البريد الإلكتروني
        // transporter.sendMail(mailOptions, (error, info) => {
        //   if (error) {
        //   console.log(error);
        //   } else {
        //   console.log('Email sent: ' + info.response);
        //   setTimeout(() => {
        //     verificationCode = generateVerificationCode();
        //   }, 60 * 60 * 1000);
        //   } 
        // });

        const user = await User.signup(fullName, phoneNumber, country, city, email, password) 

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ _id: user._id, fullName, phoneNumber, country, city, email , points: user.points, token })
  } catch (error) { 
    res.status(400).json({error: error.message})
  }
}


// account recovery 
const accountRecovery = async (req, res) => {
  const { email } = req.body;

  try {
  
    const user = await User.recovery(email)

        // create a token
        const token = createToken(user._id)

         // تجهيز الرسالة
        const transporter = createTransporter();
        const mailOptions = createMailOptions(email, verificationCode);

        // إرسال البريد الإلكتروني
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
          console.log(error);
          } else {
          console.log('Email sent: ' + info.response);
          setTimeout(() => {
            verificationCode = generateVerificationCode();
          }, 60 * 60 * 1000);
          } 
        });

        res.status(200).json({ _id: user._id, fullName: user.fullName, phoneNumber: user.phoneNumber, country: user.country, city: user.city, email , points: user.points, token })
  } catch (error) {
    res.status(500).send({error: error.message});
  }
}

// Processing user code
const confirmationCode = (req, res) => {
  const { inputValues } = req.body;

  try {
  
    if (inputValues.length > 0 ) {
  
      const verificationCodeString = verificationCode.toString();
      const inputValuesString = inputValues.join('');
  
      const numbersMatch = verificationCodeString === inputValuesString;
  
      if (numbersMatch) {
        res.status(200).json({ message: "The number True" })
        console.log("The number True");
        verificationCode = generateVerificationCode();
      }else {
        res.status(400).json({ message: "The number False" })
        console.log("The number False");
      }
  
    } else console.log("Error!");
  
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
  
}

// Get all users 
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({createdAt: -1})

  res.status(200).json(users)
}

// delete a user
const deleteUser = async (req, res) => {
  const { userId } = req.body

  if (!mongoose.Types.ObjectId.isValid(userId)) { // التحقق اذا كان المعرف صالح ام لا
    return res.status(400).json({error: 'No such user'})
  }

  const user = await User.findOneAndDelete({_id: userId})

  if(!user) {
    return res.status(400).json({error: 'No such user'})
  }

  res.status(200).json(user)
}


module.exports = { signupUser, loginUser, accountRecovery, confirmationCode, getUsers, deleteUser }
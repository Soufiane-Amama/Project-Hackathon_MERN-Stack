
const nodemailer = require('nodemailer');

// إنشاء نقل البريد الإلكتروني
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'smtp', 
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });
};

// إعداد رسالة البريد الإلكتروني
const createMailOptions = (email, verificationCode) => {
  return {
    from: process.env.MAIL_FROM, 
    to: email, 
    subject: 'تأكيد البريد',
    text: ` يرجى تأكيد البريد الإلكتروني. بارسال الرمز التالي ${verificationCode}`
  };
};

module.exports = { createTransporter, createMailOptions };

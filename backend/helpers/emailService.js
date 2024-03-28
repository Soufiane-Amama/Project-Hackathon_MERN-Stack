// emailService.js

const nodemailer = require('nodemailer');

// دالة لإرسال رسالة بريد إلكتروني
const sendEmail = async (to, subject, text) => {
  try {
    // إعداد نقل البريد الإلكتروني
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });
    
    // إعداد رسالة البريد الإلكتروني
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: to,
      subject: subject,
      text: text
    };
    
    // إرسال البريد الإلكتروني
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = sendEmail;

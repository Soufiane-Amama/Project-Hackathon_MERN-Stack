import React, { useState,useEffect } from 'react';


import Navbar from '../Components/home/Navbar';
import hand from '../images/flow.png';

import useURL from '../hooks/useURL';


const Sighnin = () => {

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      // If token is present, redirect the user to the dashboard
      window.location.href = '/dashboard';
    }
  }, []); // Run this effect only once on component mount

  const [fullName, setfullName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [accept, setAccept] = useState(false); // هذي مهمة لحتى نعرفو اذا المستخدم ضغط على الزر الارسال ولا لا
  const [error, setError] = useState('');
 

  const path = useURL();

  
  
  

  const handlefullNameChange = (e) => {
    setfullName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlephoneNumberChange = (e) => {
    setphoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setError('');
  
   // Check if all fields are filled
  if (!fullName || !password || !phoneNumber || !email || !country || !city || !confirmPassword) {
    setError('All fields must be filled');
    return;
  }

  // Check email validity
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError('Email not valid');
    return;
  }

  // Check password strength
  

  // Check if passwords match
  if (password !== confirmPassword) {
    setError('Passwords do not match');
    return;
  }

    const user = {
      fullName,
      phoneNumber,
      country,
      city,
      email,
      password,
  };
  
    // Send data to backend
    try {
      const response = await fetch("https://server-hackathon-mnl9.onrender.com/api/user/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Store user information in an object
       
  
        // Handle backend response
        if (data.message) {
          setError(data.message); // Assuming backend sends a message on success
        } else {
          window.location.href = '/dashboard'; // Change '/home' to your actual home page URL
        }
      } else {
        // Handle backend errors
        setError(data.error || 'An error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
    // Reset any previous errors
    
  };
  
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center  bg-teal-600  '>
        <div className='flex justify-center flex-col md:flex-row items-center gap-10 w-full p-8 text-white font-semibold text-right'>
          <div className='mb-12'>
            <div className='mb-4 relative pt-4'>
              <div className='absolute hidden lg:block top-[-400px] md:w-full opacity-40 left-20 z-1'>
                <img src={hand} alt='' />
              </div>
              
            </div>
            <div className='mb-4'>
              <h3>فوائد المشاركة ؟</h3>
              <div className='mr-5'>
                <h3 className=''>كيف تكون سبب في نظافة مدينتك ؟</h3>
              <p>ساهم معنا لنحمي الأرض من خلال اعادة تدوير مخلفات البيئة </p>
                <p>١ . مدينة جميلة وخالية من الأمراض</p>
                <p>٢ . مدينة مليئة بالسعادة </p>
                <p>٣ . عند جمعك للنقاط يمكنك الحصول على الكثير من الخصومات والهدايا المجانية</p>
              </div>
            </div>
            <div>
              <h3 className='text-center text-2xl'>كن جزءًا من البيئة اليوم </h3>
            </div>
          </div>
          <div className='w-full md:w-[350px] mx-auto bg-white p-8 rounded-lg shadow-lg text-black'>
            <h3 className='text-center mb-6 text-black'>   انشاء حساب      </h3>
            <form onSubmit={handleSubmit} >
              <div className='mb-4'>
                <label className='block mb-1'>اسم المستخدم</label>
                <input type='text' value={fullName} onChange={handlefullNameChange} className='w-full p-2 border border-gray-300 bg-white rounded-md' />
              </div>
              <div className='mb-4'>
                <label className='block mb-1'>البريد الالكتروني   </label>
                <input type='text' value={email} onChange={handleEmailChange} className='w-full p-2 border border-gray-300 bg-white rounded-md' />
              </div>
              <div className='mb-4'>
                <label className='block mb-1'>رقم الهاتف</label>
                <input type='text' value={phoneNumber} onChange={handlephoneNumberChange} className=' w-full p-2 border bg-white border-gray-300 rounded-md' />
              </div>
              <div className='mb-4'>
                <label className='block mb-1 '> البلد</label>
                <select value={country} onChange={handleCountryChange} className=' text-end w-full p-2 border border-gray-300 rounded-md bg-white'>
                  <option value='السعودية'> السعودية</option>
                  <option value='قطر'>  قطر </option>
                  <option value='تونس'>  تونس </option>
                  
                  {/* Add options for countries here */}
                </select>
              </div>
              <div className='mb-4'>
                <label className='block mb-1'>المدينة</label>
                <input type='text' value={city} onChange={handleCityChange} className='w-full p-2 border border-gray-300 rounded-md bg-white' />
              </div>
              <div className='mb-4'>
                <label className='block mb-1'>كلمة المرور</label>
                <input type='password' value={password} onChange={handlePasswordChange} className='w-full p-2 border border-gray-300 bg-white rounded-md' />
              </div>
              <div className='mb-4'>
                <label className='block mb-1'>اعادة كلمة المرور</label>
                <input type='password' value={confirmPassword} onChange={handleConfirmPasswordChange} className='w-full p-2 border bg-white border-gray-300 rounded-md' />
              </div>
              {error && <div style={{ color: 'red' }}>{error}</div>}
              <button type='submit' className='w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600'> انشاء حساب      </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sighnin
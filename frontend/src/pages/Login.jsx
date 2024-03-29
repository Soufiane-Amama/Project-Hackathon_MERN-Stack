import React, { useState , useEffect } from 'react'
import Navbar from '../Components/home/Navbar';

import hand from '../images/flow.png';
import useURL from '../hooks/useURL';
const Login = () => {

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      // If token is present, redirect the user to the dashboard
      window.location.href = '/dashboard';
    }
  }, []); // Run this effect only once on component mount


  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 

  const path = useURL();

  const handleemailChange = (e) => {
    setemail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const user = {
    email,
    password,
    
};

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Reset any previous errors
    setError('');
  
    // Check if any field is empty
    if (!email || !password) {
      setError('All fields must be filled');
      return;
    }
  
    // Send login request to the backend
    try {
      const response = await fetch('https://server-hackathon-mnl9.onrender.com/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email, // Assuming the email input field represents the email ((*AAsdfs12354))
          password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        const { token, ...userData } = data;
        // Store the token and user data in localStorage or sessionStorage for future use
        localStorage.setItem('token', token);
        localStorage.setItem('userData', JSON.stringify(userData));

        window.location.href = '/dashboard';
      } else {
        // Handle login errors from the backend
        if (data.error === 'Incorrect email') {
          setError('Incorrect email');
        } else if (data.error === 'Incorrect password') {
          setError('Incorrect password');
        } else {
          setError('An error occurred. Please try again later.');
        }
        
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };
  

  return (
    <>
      <Navbar/>
      <div className='flex justify-center items-center   md:h-screen bg-teal-600 pt-20'>
          
          <div className='  flex justify-center flex-col md:flex-row items-center gap-10 w-full p-8 text-white font-semibold text-right ' >
            
            <div className='mb-12 '>
            
            <div className='mb-4   relative'>
              <div className='absolute hidden lg:block top-[-400px]  md:w-full opacity-40 left-20 z-1'><img src={hand}  alt="" /></div>
              
            </div>
            <div className='mb-4'>
            <h3 className='py-2'>كيف تكون سبب في نظافة مدينتك ؟</h3>
              <p>ساهم معنا لنحمي الأرض من خلال اعادة تدوير مخلفات البيئة </p>
              <br />
              <h3>فوائد المشاركة ؟</h3>
              <div className='mr-5'> 
                <p>١ .  مدينة جميلة وخالية من الأمراض</p>
                <p>٢ .  مدينة مليئة بالسعادة </p>
                <p>٣ .  عند جمعك للنقاط يمكنك الحصول على الكثير من الخصومات والهدايا المجانية</p>
              </div>
              
            </div>
            <div>
              <h3 className='text-center text-2xl'>كن جزءًا من البيئة اليوم </h3>
            </div>
          </div>
          <div className='w-full md:w-[350px] mx-auto  bg-white p-8 rounded-lg shadow-lg text-black'>
            <h3 className='text-center mb-6 text-black'>تسجيل الدخول</h3>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label className='block mb-1 '> البريد الالكتروني::</label>
                <input type='email' value={email} onChange={handleemailChange} className='w-full p-2 border border-gray-300 rounded-md bg-white' />
              </div>
              <div className='mb-4'>
                <label className='block mb-1'>كلمة المرور:</label>
                <input type='password' value={password} onChange={handlePasswordChange} className='w-full p-2 border border-gray-300 bg-white rounded-md' />
              </div>
              {error && <div style={{ color: 'red' }}>{error}</div>}
              <button type='submit' className='w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600'>تسجيل الدخول</button>
            </form>
          </div>
          
        </div>
      </div>
    </>
   
  );
}

export default Login
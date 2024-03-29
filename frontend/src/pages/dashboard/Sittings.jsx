import React from 'react';
import AdminSidebar from '../../Components/AdminSidebar';
import AdminNavbar from '../../Components/AdminNavbar';

import avatar from "../../images/avatar.png";

const Sittings = () => {
  return (
    <>
      <AdminSidebar />
      <AdminNavbar title={"الاعدادات"} />
      <div className='md:pl-[218px] pt-2 bg-teal-600 h-screen shadow-xl text-black'>
        <div className='bg-white w-full flex flex-col md:flex-row items-start gap-4 rounded-lg shadow-xl '>

          <div className='flex flex-col justify-center gap-2 m-10'>
            <img className='rounded-full w-20' src={avatar} alt="" />
            <div>#12548796</div>
          </div>

          <div className='w-full'>
            <form className='px-4 py-2 '>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                  Name
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 bg-white focus:outline-none focus:shadow-outline'
                  id='name'
                  type='text'
                  placeholder='Enter your name'
                  value={"rayen ben hassen"}
                />
              </div>

              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                  Phone
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 bg-white focus:outline-none focus:shadow-outline'
                  id='name'
                  type='text'
                  placeholder='Enter your Number'
                  value={"95 881 231"}
                />
              </div>

              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                  Email
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 bg-white focus:outline-none focus:shadow-outline'
                  id='email'
                  type='email'
                  placeholder='Enter your email'
                  value={"rayena@gmail.com"}
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                  Password
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 bg-white focus:outline-none focus:shadow-outline'
                  id='password'
                  type='password'
                  placeholder='Enter your password'
                  value={"95 881 231"}
                />
              </div>
              
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='city'>
                  City
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 bg-white focus:outline-none focus:shadow-outline'
                  id='city'
                  type='text'
                  placeholder='Enter your city'
                  value={"Djerba"}
                />
              </div>
            <div className='text-center'>
                <button
                    className='bg-green-500 hover:bg-green-700 w-3/6  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='submit'
                >
                    Submit
                </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sittings;

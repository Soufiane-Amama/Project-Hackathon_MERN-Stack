import React, { useState } from 'react'
import logo from '../../images/logo.png' ;

import { IoMenu } from "react-icons/io5";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

  return (
    <nav className='flex  fixed w-full justify-between items-center text-center px-2 py-1 z-1000 bg-teal-600'>
      <div className='w-20 md:w-32'>
        <a href="/"><img src={logo}   alt="" /></a>
      </div>

      <ul className={` ${isOpen ? "flex flex-col gap-10 bg-gray-800 absolute top-9 left-0 w-full px-4 py-4 z-50" : "hidden"} gap-5 md:flex md:flex-row md:bg-transparent md:relative md:w-auto md:p-0 md:space-x-4 md:top-auto md:left-auto md:py-0 md:z-auto`}>
        <li><a href="#about" className="text-white hover:text-gray-300">من نحن</a></li>
        <li><a href="#contact" className="text-white hover:text-gray-300">  اتصل بنا  </a></li>
        <li><a href="#madinati" className="text-white hover:text-gray-300">مدينتي</a></li>
        <li><a href="/login" className="text-white hover:text-gray-300">لوحة البيانات</a></li>
      </ul>

      <ul className="flex list-none gap-5">
        <li>
            <a className="text-xs md:text-sm px-4 py-2 rounded bg-green-700 text-white hover:bg-green-600" href="login">تسجيل دخول</a>
        </li>
        <li>
            <a className="text-xs md:text-sm px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600" href="sighnin">انشاء حساب            </a>
        </li>
      </ul>

      <div className="  md:hidden cursor-pointer text-white" onClick={toggleMenu}>
          <IoMenu className='icon' size={30}/>
      </div>

    </nav>
  )
}

export default Navbar
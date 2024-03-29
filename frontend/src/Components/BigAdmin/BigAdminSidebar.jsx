import React, {  useState } from "react";
import logo from "../../images/logo2.svg";
import useBigAdminSidebar from "../../hooks/useBigAdminSidebar"

import AdminSidebarLink from "../AdminSidebarLink";

import { FaUserGear } from "react-icons/fa6";
import { TbAdjustmentsCog } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosHome } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const BigAdminSidebar = () => {

    const sideBar= useBigAdminSidebar();

  return (
    <div
      className={`fixed  z-30 transition-transform duration-500 ease-in-out  shadow-lg
       `}
    >
      <div className={`bg-white fixed shadow-lg p-50 text-white h-full w-[208px] flex flex-col items-center justify-center
           ${sideBar.isOpen ? '' : 'hidden'}`}
      >
        <div
          className='absolute  text-black top-2 right-2 cursor-pointer hover:scale-105 transition  md:hidden'
          onClick={sideBar.onClose}
        >
          <IoCloseSharp size={32} />
        </div><a href="/admin/dashboard">
        <img
          src={logo}
          width={120}
          height={90}
          alt='logo'
          className='pt-5 pb-5'
        /></a>

        <div className='flex flex-col   h-screen overflow-y-auto w-full'>
          <AdminSidebarLink title='الطلبات' to='/admin/dashboard/orders' icon={ IoIosHome} />
          <AdminSidebarLink title='الحسابات ' to='/admin/dashboard/Compts' icon={FaUserGear} />
          <AdminSidebarLink title='المتجر' to='/admin/dashboard/Shop' icon={ TiShoppingCart} />
          
          
          
          
        </div>
      </div>
    </div>
  )
}

export default BigAdminSidebar
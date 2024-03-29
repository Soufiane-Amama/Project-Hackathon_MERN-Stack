
import { IoCloseSharp } from "react-icons/io5";
import AdminSidebarLink from "./AdminSidebarLink";

import React, {  useState } from "react";

import { IoIosHome } from "react-icons/io";

import logo from "../images/logo2.svg";

import useSidebarStore from "../hooks/useSidebarStore";

import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TbAdjustmentsCog } from "react-icons/tb";
import { PiMedalFill } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";
import { ImTruck } from "react-icons/im";

const AdminSidebar = () => {
  
  const sideBar= useSidebarStore();
  
  

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
        </div><a href="/dashboard">
        <img
          src={logo}
          width={120}
          height={90}
          alt='logo'
          className='pt-5 pb-5'
        /></a>

        <div className='flex flex-col   h-screen overflow-y-auto w-full'>
          <AdminSidebarLink title='لوحة المعلومات' to='/dashboard/overview' icon={IoIosHome} />
          <AdminSidebarLink title='العمليات' to='/dashboard/processes' icon={FaMoneyBillTransfer} />
          <AdminSidebarLink title='الاعدادات' to='/dashboard/sittings' icon={TbAdjustmentsCog} />
          <AdminSidebarLink title='الشارات' to='/dashboard/medals' icon={ PiMedalFill} />
          <AdminSidebarLink title='المتجر' to='/dashboard/shop' icon={ TiShoppingCart} />
          <AdminSidebarLink title='طلباتي' to='/dashboard/orders' icon={ ImTruck} />
          
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;

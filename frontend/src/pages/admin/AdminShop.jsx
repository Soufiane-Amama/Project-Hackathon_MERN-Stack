import React, { useState } from 'react'
import AdminOrderModel from '../../Components/AdminOrderModel'
import BigAdminSidebar from '../../Components/BigAdmin/BigAdminSidebar'
import BigNavbar from '../../Components/BigAdmin/BigNavbar'


import avatar from "../../images/avatar.png";
import pubg from "../../images/pubg.png";
import carrfour from "../../images/carrfour.svg";
import epic from "../../images/epic.png";
import appstore from "../../images/pAppStore.svg";
import bniya from "../../images/bniya.png";
import express from "../../images/express.png";

import soon from "../../images/soon.png";



import { AiFillCloseSquare } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { BiSolidCommentAdd } from "react-icons/bi";

const AdminShop = () => {
  return (
    <>

        <AdminOrderModel/>
        <BigAdminSidebar/>
        <BigNavbar title={"المتجر"}/>
        <div className='md:pl-[218px] pt-2  bg-teal-600 h-screen   text-black  '>

            <div className='flex flex-wrap justify-center gap-10'>
                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '  >
                    <div className='w-20 h-32 md:w-32 m-4 '><img className=' ' src={pubg} alt="" /></div>
                    <div className='font-semibold'>16200 UC</div>
                    <div className=''>20000 points</div> 
                    <div className='p-2 mt-5 px-10 bg-green-300 rounded-lg cursor-pointer'>
                        <div className='flex gap-2'>
                            <AiFillCloseSquare size={25} className='text-red-500'/>
                            <FaEdit size={25} className='text-yellow-500'/>
                            <BiSolidCommentAdd size={25} className='text-green-500'/>
                        </div>
                        
                    </div>
                </div>
            

                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '>
                    <img className='w-20 h-32 md:w-32 m-4 ' src={carrfour} alt="" />
                    <div className='font-semibold'>15% sale in all product</div>
                    <div className=''>3000 points</div> 
                    <div className='p-2 mt-5 px-10 bg-green-300 rounded-lg cursor-pointer'>
                        <div className='flex gap-2'>
                            <AiFillCloseSquare size={25} className='text-red-500'/>
                            <FaEdit size={25} className='text-yellow-500'/>
                            <BiSolidCommentAdd size={25} className='text-green-500'/>
                        </div>
                    </div>
                </div>

                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '>
                    <img className='w-20 h-32 md:w-32 m-4 ' src={epic} alt="" />
                    <div className='font-semibold'>10 dollar wallet</div>
                    <div className=''>20000 points</div> 
                    <div className='p-2 mt-5 px-10 bg-green-300 rounded-lg cursor-pointer'>
                    <div className='flex gap-2'>
                            <AiFillCloseSquare size={25} className='text-red-500'/>
                            <FaEdit size={25} className='text-yellow-500'/>
                            <BiSolidCommentAdd size={25} className='text-green-500'/>
                        </div>
                    </div>
                </div>

                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '>
                    <img className='w-20 h-32 md:w-32 m-4 ' src={appstore} alt="" />
                    <div className='font-semibold'>10 dollar wallet</div>
                    <div className=''>3000 points</div> 
                    <div className='p-2 mt-5 px-10 bg-green-300 rounded-lg cursor-pointer'>
                    <div className='flex gap-2'>
                            <AiFillCloseSquare size={25} className='text-red-500'/>
                            <FaEdit size={25} className='text-yellow-500'/>
                            <BiSolidCommentAdd size={25} className='text-green-500'/>
                        </div>
                    </div>
                </div>

                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '>
                    <img className='w-20 h-32 md:w-32 m-4 ' src={bniya} alt="" />
                    <div className='font-semibold'>15% sale in all product</div>
                    <div className=''>22300 points</div> 
                    <div className='p-2 mt-5 px-10 bg-green-300 rounded-lg cursor-pointer' >
                    <div className='flex gap-2'>
                            <AiFillCloseSquare size={25} className='text-red-500'/>
                            <FaEdit size={25} className='text-yellow-500'/>
                            <BiSolidCommentAdd size={25} className='text-green-500'/>
                        </div>
                    </div>
                </div>

                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '>
                    <img className='w-20 h-32 md:w-32 m-4 ' src={express} alt="" />
                    <div className='font-semibold'>1 free coffee</div>
                    <div className=''>2040 points</div> 
                    <div className='p-2 mt-5 px-10 bg-green-300 rounded-lg cursor-pointer'>
                    <div className='flex gap-2'>
                            <AiFillCloseSquare size={25} className='text-red-500'/>
                            <FaEdit size={25} className='text-yellow-500'/>
                            <BiSolidCommentAdd size={25} className='text-green-500'/>
                        </div>
                    </div>
                </div>

                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '>
                    <img className='w-20 h-32 md:w-32 m-4 ' src={pubg} alt="" />
                    <div className='font-semibold'>15% sale in all product</div>
                    <div className=''>3000 points</div> 
                    <div className='p-2 mt-5 px-10 bg-green-300 rounded-lg cursor-pointer'>
                    <div className='flex gap-2'>
                            <AiFillCloseSquare size={25} className='text-red-500'/>
                            <FaEdit size={25} className='text-yellow-500'/>
                            <BiSolidCommentAdd size={25} className='text-green-500'/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    
    </>
  )
}

export default AdminShop
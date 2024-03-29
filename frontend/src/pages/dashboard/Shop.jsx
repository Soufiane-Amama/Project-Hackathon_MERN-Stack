import React, { useState } from 'react'
import AdminSidebar from '../../Components/AdminSidebar'
import AdminNavbar from '../../Components/AdminNavbar'

import { RiCoinsFill } from "react-icons/ri";

import avatar from "../../images/avatar.png";
import pubg from "../../images/pubg.png";
import carrfour from "../../images/carrfour.svg";
import epic from "../../images/epic.png";
import appstore from "../../images/pAppStore.svg";
import bniya from "../../images/bniya.png";
import express from "../../images/express.png";

import soon from "../../images/soon.png";
import AdminShopModal from '../../Components/AdminShopModal';

import coin from "../../images/coin.png";



const Shop = () => {

    const [title, setTitle] = useState(("eeee"));
    const [point, setPoint] = useState("154");
    //const [img, setImg] = useState("pubg");
    

  return (
    <>
        <AdminShopModal title={title} point={point}  />
        <AdminSidebar/>
        <AdminNavbar title={"العمليات"}/>
        <div className='md:pl-[218px] pt-2  bg-teal-600  text-black  '>
            <div className='w-full flex justify-center my-10 '>
                <div className='flex justify-around text-center items-center w-2/5 bg-green-400 rounded-lg text-white'>
                    <div className='text-yellow-900'><img src={coin} className='w-12 p-1' alt="" /></div>
                    <div>5,756</div>
                    <div>نقاطي   </div>
                </div>
            </div>

            <div className='flex flex-wrap justify-center gap-10'>
            
                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '  >
                    <div className='w-20 h-32 md:w-32 m-4 '><img className=' w-full ' src={pubg} alt="" /></div>
                    <div className='font-semibold'>16200 UC</div>
                    <div className=''>20000 points</div> 
                    <div className='p-2 mt-5 px-10 bg-green-300 rounded-lg cursor-pointer' onClick={()=>{
                        document.getElementById('my_modal_1').showModal()
                        setTitle("16200 UC");
                        setPoint("20000");
                        //setImg("pubg");
                        }}>شراء</div>
                </div>

                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '>
                <div className='w-20 h-32 md:w-32 m-4 '><img className=' w-full ' src={carrfour} alt="" /></div>
                    <div className='font-semibold'>15% sale in all product</div>
                    <div className=''>3000 points</div> 
                    <div className='p-2 mt-5 px-10 bg-green-300 rounded-lg cursor-pointer' onClick={()=>{
                        document.getElementById('my_modal_1').showModal()
                        setTitle("15% sale in all product");
                        setPoint("3000");
                        //setImg("carrfour");
                        }}>شراء</div>
                </div>

                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '>
                    <img className='w-20 md:w-32 h-32 m-4' src={epic} alt="" />
                    <div className='font-semibold'>10 dollar wallet</div>
                    <div className=''>20000 points</div> 
                    <div className='p-2 mt-5 px-10 bg-green-300 rounded-lg cursor-pointer' onClick={()=>{
                        document.getElementById('my_modal_1').showModal()
                        setTitle("10 dollar wallet");
                        setPoint("20000");
                        //setImg("carrfour");
                        }}>شراء</div>
                </div>

                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '>
                    <img className='w-20 md:w-32 h-32  m-4' src={appstore} alt="" />
                    <div className='font-semibold'>10 dollar wallet</div>
                    <div className=''>3000 points</div> 
                    <div className='p-2 mt-5 px-10 bg-green-300 rounded-lg cursor-pointer' onClick={()=>{
                        document.getElementById('my_modal_1').showModal()
                        setTitle("10 dollar wallet");
                        setPoint("3000");
                        //setImg("carrfour");
                        }}>شراء</div>
                </div>

                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '>
                    <img className='w-20 md:w-32 h-32  m-4' src={bniya} alt="" />
                    <div className='font-semibold'>15% sale in all product</div>
                    <div className=''>22300 points</div> 
                    <div className='p-2 mt-5 px-10 bg-green-300 rounded-lg cursor-pointer' onClick={()=>{
                        document.getElementById('my_modal_1').showModal()
                        setTitle("15% sale in all product");
                        setPoint("22300");
                        //setImg("carrfour");
                        }}>شراء</div>
                </div>

                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '>
                    <img className='w-20 md:w-32 h-32  m-4' src={express} alt="" />
                    <div className='font-semibold'>1 free coffee</div>
                    <div className=''>2040 points</div> 
                    <div className='p-2 mt-5 px-10 bg-green-300 rounded-lg cursor-pointer' onClick={()=>{
                        document.getElementById('my_modal_1').showModal()
                        setTitle("1 free coffee");
                        setPoint("2040");
                        //setImg("carrfour");
                        }}>شراء</div>
                </div>

                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '>
                    <img className='w-20 md:w-32 h-32  m-4' src={pubg} alt="" />
                    <div className='font-semibold'>15% sale in all product</div>
                    <div className=''>3000 points</div> 
                    <div className='p-2 mt-5 px-10 bg-green-300 rounded-lg cursor-pointer' onClick={()=>{
                        document.getElementById('my_modal_1').showModal()
                        setTitle("15% sale in all product");
                        setPoint("3000");
                        //setImg("carrfour");
                        }}>شراء</div>
                </div>

                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '>
                    <img className='w-20 md:w-32 m-4' src={soon} alt="" />
                    
                </div>

                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '>
                    <img className='w-20 md:w-32 m-4' src={soon} alt="" />
                    
                </div>
                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '>
                    <img className='w-20 md:w-32 m-4' src={soon} alt="" />
                    
                </div>

                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '>
                    <img className='w-20 md:w-32 m-4' src={soon} alt="" />
                     
                </div>

                <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg '>
                    <img className='w-20 md:w-32 m-4' src={soon} alt="" />
                    
                </div>

            </div>
            
            
        </div>
    </>
  )
}

export default Shop
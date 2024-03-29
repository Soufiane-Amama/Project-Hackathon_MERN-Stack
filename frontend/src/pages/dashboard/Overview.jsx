import React from 'react'
import AdminNavbar from '../../Components/AdminNavbar'
import AdminSidebar from '../../Components/AdminSidebar'

import { CiShoppingCart } from "react-icons/ci";
import { BsTruck } from "react-icons/bs";
import { FaArrowsSpin } from "react-icons/fa6";
import { RiCoinsFill } from "react-icons/ri";

import pubg from "../../images/pubg.png";
import carrfour from "../../images/carrfour.svg";
import epic from "../../images/epic.png";
import appstore from "../../images/pAppStore.svg";
import avatar from "../../images/avatar.png";
import coin from "../../images/coin.png";



const Overview = () => {
  return (
    <>
        <AdminSidebar/>
        <AdminNavbar title={"لوحة المعلومات"}/>
        <div className='md:pl-[218px] pt-2  bg-teal-600 text-black '>
          <div className=' flex flex-col sm:flex-row justify-center items-center '>

            <div className=' w-full sm:w-1/2 m-5 flex flex-col gap-10 '>
              <div className='bg-white rounded-lg shadow-xl'> 
                <h2 className='text-end p-2 text-lg'>آخر العمليات</h2>
                <div className="overflow-x-auto"> 
                  <table className="table text-center">
                    
                    
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        
                        <td><div className='rounded-full inline-block p-2 text-center bg-rose-300'><CiShoppingCart size={25} /></div></td>
                        <td className='flex flex-col justify-end'>
                          <div>شراء من المتجر</div>
                          <div className='text-xs text-neutral-500'>28 January 2024</div>
                        </td>
                        <td className='text-red-500'>-850</td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        
                        <td><div className='rounded-full inline-block p-2 text-center bg-blue-300'><BsTruck size={25}/></div></td>
                        <td className='flex flex-col justify-end'>
                          <div>شاحنة إعادة التدوير</div>
                          <div className='text-xs text-neutral-500'>28 January 2024</div>
                        </td>
                        <td className='text-green-500'>-850</td>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        
                        <td><div className='rounded-full inline-block p-2 text-center bg-green-300'><FaArrowsSpin size={25}/></div></td>
                        <td className='flex flex-col justify-end'>
                          <div>خزانة إعادة التدوير</div>
                          <div className='text-xs text-neutral-500'>28 January 2024</div>
                        </td>
                        <td className='text-green-500'>-850</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
              <div className='bg-white rounded-lg shadow-xl'> 
                <h2 className='text-end p-2 text-lg'>أخر الطلبات</h2>
                <div className="overflow-x-auto"> 
                  <table className="table text-center">
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <td><div className='inline-block text-center '><img src={carrfour} width={35}  alt="" /></div></td>
                        <td className='flex flex-col justify-end'>
                          <div>15% sale in all product</div>
                          <div className='text-xs text-neutral-500'>Carrfour</div>
                        </td>
                        <td className='text-red-500'>-25000</td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        <td><div className='inline-block text-center '><img src={epic} width={35}  alt="" /></div></td>
                        <td className='flex flex-col justify-end'>
                          <div>10 dollar wallet</div>
                          <div className='text-xs text-neutral-500'>Epic</div>
                        </td>
                        <td className='text-red-500'>-35000</td>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        <td><div className='inline-block text-center '><img src={appstore} width={35}  alt="" /></div></td>
                        <td className='flex flex-col justify-end'>
                          <div>25 dollar wallet</div>
                          <div className='text-xs text-neutral-500'>App Store</div>
                        </td>
                        <td className='text-red-500'>-25000</td>
                      </tr>

                       {/* row 4 */}
                       <tr>
                        <td><div className='inline-block text-center '><img src={pubg} width={35}  alt="" /></div></td>
                        <td className='flex flex-col justify-end'>
                          <div>25 dollar wallet</div>
                          <div className='text-xs text-neutral-500'>Pubg</div>
                        </td>
                        <td className='text-red-500'>-85000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>

            <div className='bg-white  w-full sm:w-1/2 m-5 rounded-lg flex flex-col justify-around items-center p-4 shadow-xl'>
              <div className='flex justify-around text-center items-center w-4/5 bg-green-400 rounded-lg text-white'>
                <div className='text-yellow-900'><img src={coin} className='w-12 p-1' alt="" /></div>
                <div>5,756</div>
                <div>نقاطي   </div>
              </div>
              <div className='font-semibold text-teal-500 my-10'>بطل البيئة في منطقتك</div>
              <div className='flex flex-col items-center gap-8'>
                <div>
                  <img className='rounded-full w-20' src={avatar}  alt="" />
                </div>
                <div className='text-black '>Sarah Martins</div>
              </div>
              <div className='w-full flex flex-col justify-center items-center gap-4 mt-10'>
                <div className='flex justify-around text-center items-center w-4/5 bg-yellow-400 rounded-lg text-white'>
                  <div className='text-yellow-900'><img src={coin} className='w-12 p-1' alt="" /></div>
                  <div>5,756</div>
                  <div>أنت   </div>
                </div>

                <div className='flex justify-around text-center items-center w-4/5 bg-yellow-400 rounded-lg text-white'>
                  <div className='text-yellow-900'><img src={coin} className='w-12 p-1' alt="" /></div>
                  <div>2300</div>
                  <div>Neha   </div>
                </div>

                <div className='flex justify-around text-center items-center w-4/5 bg-yellow-400 rounded-lg text-white'>
                  <div className='text-yellow-900'><img src={coin} className='w-12 p-1' alt="" /></div>
                  <div>2300</div>
                  <div>Anjali   </div>
                </div>
                
                
              </div>


            </div>

          </div>
        </div>
        
       
        
    </>
  )
}

export default Overview
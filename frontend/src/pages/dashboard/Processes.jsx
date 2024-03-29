import React from 'react'
import AdminSidebar from '../../Components/AdminSidebar'
import AdminNavbar from '../../Components/AdminNavbar'

import { RiCoinsFill } from "react-icons/ri";
import coin from "../../images/coin.png";

const Processes = () => {
  return (
    <>
        <AdminSidebar/>
        <AdminNavbar title={"العمليات"}/>
        <div className='md:pl-[218px] pt-2  bg-teal-600 h-screen text-black  '>
            <div className='w-full flex justify-center my-10 '>
                <div className='flex justify-around text-center items-center w-2/5 bg-green-400 rounded-lg text-white'>
                    <div className='text-yellow-900'><img src={coin} className='w-12 p-1' alt="" /></div>
                    <div>5,756</div>
                    <div>نقاطي   </div>
                </div>
            </div>

            <div className='bg-white rounded-lg shadow-xl text-black'> 
                <h2 className='text-end p-2 text-lg'>آخر العمليات</h2>
                <div className="overflow-x-auto"> 
                  <table className="table text-center">
                    <thead>
                        <tr>
                            
                            <th>Id</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        
                        <td><div className='rounded-full inline-block p-2 text-center bg-rose-300 '>#12548796</div></td>
                        <td className='flex flex-col justify-end'>
                          <div>شراء من المتجر</div>
                        </td>
                        <td><div className='text-xs text-neutral-500'>28 January 2024</div></td>
                        <td className='text-red-500'>-850</td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        
                        <td><div className='rounded-full inline-block p-2 text-center bg-blue-300'>#12548796</div></td>
                        <td className='flex flex-col justify-end'>
                          <div>شاحنة إعادة التدوير</div>
                          
                        </td>
                        <td><div className='text-xs text-neutral-500'>28 January 2024</div></td>
                        <td className='text-green-500'>-850</td>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        
                        <td><div className='rounded-full inline-block p-2 text-center bg-green-300'>#12548796</div></td>
                        <td className='flex flex-col justify-end'>
                          <div>خزانة إعادة التدوير</div>
                          
                        </td>
                        <td><div className='text-xs text-neutral-500'>28 January 2024</div></td>
                        <td className='text-green-500'>-850</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

            </div>
        </div>
    </>
  )
}

export default Processes
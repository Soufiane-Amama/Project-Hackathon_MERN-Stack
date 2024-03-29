

import AdminSidebar from '../../Components/AdminSidebar'
import AdminNavbar from '../../Components/AdminNavbar'
import React, { useState, useEffect } from 'react';
import { MdOutlineAdd } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa";
import AdminOrderModel from '../../Components/AdminOrderModel';

const Orders = () => {

  const [truckRequests, setTruckRequests] = useState([]);
    const [userId, setUserId] = useState(""); // You can set this value from your authentication system or from props

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://server-hackathon-mnl9.onrender.com/api/truck", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        // Add your token here
                        "Authorization": "Bearer your_token_here"
                    }
                });
                const data = await response.json();
                if (response.ok) {
                    setTruckRequests(data);
                } else {
                    console.error("Failed to fetch truck requests");
                }
            } catch (error) {
                console.error("Error fetching truck requests:", error);
            }
        };

        if (userId) {
            fetchData();
        }
    }, [userId]);

  return (
    <>
        <AdminOrderModel/>
        <AdminSidebar/>
        <AdminNavbar title={"العمليات"}/>
        <div className='md:pl-[218px] pt-2  bg-teal-600 h-screen  text-black  '>
            <div className='flex flex-col w-full items-center '>
                <div className='flex items-center gap-5 mt-5' onClick={()=>{document.getElementById('my_modal_1').showModal()}}>
                    <div className='p-2 bg-white  rounded-full flex justify-center cursor-pointer'><MdOutlineAdd size={40} className='rounded-full bg-green-500   '/></div>
                    <div className='font-semibold text-white'>اطلب شاحنة جديدة</div>
                </div>

                <div className='bg-white rounded-lg shadow-xl text-black w-full mt-10 '> 
                <h2 className='text-end p-2 text-2xl'>آخر العمليات</h2>
                <div className="overflow-x-auto"> 
                  <table className="table text-center">
                    
                    
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        
                        <td><div className='rounded-full inline-block p-2 text-center bg-yellow-300 '><FaTruckMoving size={25}/></div></td>
                        <td className='flex flex-col justify-end'>
                          <div className='text-yellow-500 font-semibold'>في الطريق  </div>
                        </td>
                        <td><div className='text-xs text-neutral-500'>28 January 2024</div></td>
                        <td className='text-yellow-500'>لا يزال بعد</td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        
                        <td><div className='rounded-full inline-block p-2 text-center bg-red-300 '><FaTruckMoving size={25}/></div></td>
                        <td className='flex flex-col justify-end'>
                          <div className='text-red-500 font-semibold'>فشلت العملية</div>
                        </td>
                        <td><div className='text-xs text-neutral-500'>28 January 2024</div></td>
                        <td className='text-red-500'>0</td>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        
                        <td><div className='rounded-full inline-block p-2 text-center bg-green-300 '><FaTruckMoving size={25}/></div></td>
                        <td className='flex flex-col justify-end'>
                          <div className='text-green-500 font-semibold'>تمت العملية بنجاح</div>
                        </td>
                        <td><div className='text-xs text-neutral-500'>28 January 2024</div></td>
                        <td className='text-green-500'>+8 850</td>
                      </tr>
                      {truckRequests.map((request, index) => (
                                        <tr key={index}>
                                            <td><div className={`rounded-full inline-block p-2 text-center bg-${request.status === "في الطريق" ? "yellow" : request.status === "فشلت العملية" ? "red" : "green"}-300`}><FaTruckMoving size={25} /></div></td>
                                            <td className='flex flex-col justify-end'>
                                                <div className={`text-${request.status === "في الطريق" ? "yellow" : request.status === "فشلت العملية" ? "red" : "green"}-500 font-semibold`}>{request.status}</div>
                                            </td>
                                            <td><div className='text-xs text-neutral-500'>{request.date}</div></td>
                                            <td className={`text-${request.status === "في الطريق" ? "yellow" : request.status === "فشلت العملية" ? "red" : "green"}-500`}>{request.status === "في الطريق" ? "لا يزال بعد" : request.status === "فشلت العملية" ? "0" : `+${request.amount}`}</td>
                                        </tr>
                                    ))}
                    </tbody>
                  </table>
                </div>

            </div>

            </div>
        </div>
    </>
  )
}

export default Orders
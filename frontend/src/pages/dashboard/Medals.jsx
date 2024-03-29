import React from 'react'
import AdminSidebar from '../../Components/AdminSidebar';
import AdminNavbar from '../../Components/AdminNavbar';

import M1 from "../../images/medal1.png";
import M2 from "../../images/medal2.png";

const Medals = () => {
  return (
    <>
        <AdminSidebar />
        <AdminNavbar title={"الشارات"} />
        <div className='md:pl-[218px] pt-2 bg-teal-600  shadow-xl text-black'>

            <div className='bg-white rounded-lg shadow-xl text-black'> 
                <h2 className='text-end p-2 text-2xl font-bold m-5'>شارات بطل البيئة</h2>
                <div className="overflow-x-auto"> 
                    <div className='flex justify-around flex-wrap '>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M2} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M2} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M2} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M2} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M2} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M2} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        <div><img className='w-28 md:w-48' src={M1} alt="" /></div>
                        

                        


                    </div>
                  
                </div>

            </div>
        </div>
    
    </>
  )
}

export default Medals
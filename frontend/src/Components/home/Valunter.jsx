import React from 'react'

import img1 from '../../images/avatar/1.jpg' ;
import img2 from '../../images/avatar/2.jpg' ;
import img3 from '../../images/avatar/3.jpg' ;
import img4 from '../../images/avatar/5.jpg' ;

const Valunteer = () => {
  return (
    <div className='flex flex-col items-center gap-4 my-20'>
        <div className='font-bold text-lg md:text-4xl'>  المؤسسين </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 mx-5 '>

            <div className='flex flex-col items-center gap-3 cursor-pointer'>
                <img src={img1} className='w-80 rounded-t-xl' alt="" />
                <div className='flex flex-col items-center gap-0'>
                    <div className='font-bold text-xs md:text-lg text-white'>  أميرة خالد </div>
                    <div className='text-[10px] md:text-[12px] text-center pt-1'>   خبيرة في الشؤون البيئية والتوعية، لها خبرة واسعة في مجال إدارة المشاريع البيئية  </div>
                </div>
            </div>

            <div className='flex flex-col items-center gap-3 cursor-pointer'>
                <img src={img2}  className='w-80 rounded-t-xl' alt="" />
                <div className='flex flex-col items-center gap-0'>
                    <div className='font-bold text-xs md:text-lg text-white'>  رنا حسن  </div>
                    <div className='text-[10px] md:text-[12px] text-center pt-1'>   ناشطة بيئية تهتم بالمسائل الاجتماعية والبيئية، لديها خبرة في تنظيم الحملات والفعاليات البيئية  </div>
                </div>
            </div>

            <div className='flex flex-col items-center gap-3  cursor-pointer'>
                <img src={img3}  className='w-80 rounded-t-xl' alt="" />
                <div className='flex flex-col items-center gap-0'>
                    <div className='font-bold text-xs md:text-lg text-white'>  مريم حسن  </div>
                    <div className='text-[10px] md:text-[12px] text-center pt-1'>   مهندسة بيئية تسعى لدمج الجوانب البيئية والاجتماعية في حلول مستدامة للمشاكل البيئية.  </div>
                </div>
            </div>

            <div className='flex flex-col items-center gap-3  cursor-pointer'>
                <img src={img4}  className='w-80 rounded-t-xl' alt="" />
                <div className='flex flex-col items-center gap-0'>
                    <div className='font-bold text-xs md:text-lg text-white'>  يوسف محمود </div>
                    <div className='text-[10px] md:text-[12px] text-center pt-1'>    خبير في إدارة المشاريع وتطوير السياسات البيئية، يسعى للتعاون مع الجهات المختلفة لتعزيز مبادرات الاستدامة.  </div>
                </div>
            </div>

            
           

        </div>
        
    </div>
  )
}

export default Valunteer
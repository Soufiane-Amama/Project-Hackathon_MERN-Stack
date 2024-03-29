import React from 'react'

import img1 from '../../images/welcome/1.png' ;
import img2 from '../../images/welcome/2.png' ;
import img3 from '../../images/welcome/3.png' ;
import img4 from '../../images/welcome/4.png' ;


const Welcome = () => {
  return (
    <div className='w-full my-20'>
        <div className='flex flex-col items-center gap-4 '>
            <div className='font-bold text-lg md:text-4xl text-white'>قمنا بجمع وإعادة تدوير</div>

            <div className='grid grid-cols-2 md:grid-cols-4 text-center gap-4 md:gap-5 mx-2 text-black'>

                <div className='flex flex-col items-center gap-3 p-4  bg-teal-100 rounded-lg cursor-pointer shadow-xl transition  hover:bg-neutral-200'>
                    <img className='w-20 md:w-48' src={img1}  alt="" />
                    <div className='font-semibold'>بلاستيك مختلط</div>
                    <div className='font-semibold'>1233 Kg</div>
                </div>

                <div className='flex flex-col items-center gap-3 p-4 bg-teal-600 rounded-lg cursor-pointer shadow-xl transition  hover:bg-neutral-200'>
                    <img className='w-20 md:w-48' src={img2} alt="" />
                    <div className='font-semibold'>مواد المطاطية </div>
                    <div className='font-semibold'>5310 Kg</div>
                </div>

                <div className='flex flex-col items-center gap-3 p-4 bg-teal-100 rounded-lg cursor-pointer shadow-xl transition  hover:bg-neutral-200'>
                    <img className='w-20 md:w-48' src={img3} width={120} alt="" />
                    <div className='font-semibold'>مواد زجاجية </div>
                    <div className='font-semibold'>35700 Kg</div>
                </div>

                <div className='flex flex-col items-center gap-3 p-4 bg-teal-600 rounded-lg cursor-pointer shadow-xl transition  hover:bg-neutral-200'>
                    <img className='w-20 md:w-48' src={img4} width={120} alt="" />
                    <div className='font-semibold'>مواد خطرة</div>
                    <div className='font-semibold'>135700 Kg</div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Welcome
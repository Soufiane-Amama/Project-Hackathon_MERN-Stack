import React from 'react'
import { BsSendArrowUp } from "react-icons/bs";

const HomeC = () => {
  return (
    <div className='w-full bg-black h-screen home-container'id='home' >
        <div  className='
                text-center
                px-2
                md:px-20
                w-full
                h-screen
                flex
                flex-col
                items-center
                justify-center'>
            <h1 className=' text-white text-[30px]  md:text-[50px] font-extrabold'>انضم إلينا في رحلتنا لخلق عالم خالٍ من النفايات</h1>
            <p className='text-neutral-300 font-bold pt-2 '>مرحبًا بك في موقعنا المخصص لإعادة التدوير،  حيث نسعى لتوعية الناس حول أهمية إعادة التدوير وتشجيعهم على المشاركة في هذه الحركة البيئية الهامة.</p>
            <p className='text-neutral-300 font-bold pt-1'>انضم إلينا الآن لنجعل العالم أكثر جمالًا</p>
            <a href="login"><button className='p-3 text-sm md:text-base rounded-xl bg-teal-500 text-white mt-4 font-bold cursor-pointer hover:bg-teal-600 flex items-center gap-3' > <BsSendArrowUp size={20}/> <div>انضم إلينا</div></button></a>
        </div>
        

    </div>
  )
}

export default HomeC
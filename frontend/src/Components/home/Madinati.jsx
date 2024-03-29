import React from 'react'

import group from '../../images/map.png' ;

const Madinati = () => {
    return (
        <div className='flex flex-col items-center gap-4 my-20' id='madinati'>
            <div className='font-bold text-lg md:text-4xl text-white'>  أماكن تواجد خزائن بيئة   </div>
    
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mx-4 '>
    
                <a href="https://maps.app.goo.gl/cM33uNL6AiBdBxsC7">
                    <div className='card w-full text-end   shadow-xl cursor-pointer transition  text-black bg-white '>
                        <figure>
                            <img src={group}  alt='Shoes' />
                        </figure>

                        <div className='flex flex-col p-3 gap-0 items-end '>
                            <h2 className='card-title'>

                                <div className='badge badge-secondary bg-rose-500 text-white'>
                                الرياض  
                                </div>
                                السعودية      
                            </h2>
                            <h4 className='flex gap-1 justify-center'>
                                <div className='text-sm'>   طريق الملك فهد  : زقاق عدد ٢</div>
                                <div className='text-sm font-semibold'>   : 1 الشارع  </div>
                            </h4>
                            <h4 className='flex gap-1 justify-center'>
                                <div className='text-sm'>     التخصصي  : زقاق عدد ٢< /div>
                                <div className='text-sm font-semibold'>   : 2 الشارع  </div>
                            </h4>
    
                        </div>
                
                
                    </div>
                </a>
                
                <a href="https://maps.app.goo.gl/iC1zExa8uS1FAW6i9">
                    <div className='card w-full text-end   shadow-xl cursor-pointer transition  text-black bg-white  '>
                        <figure>
                            <img src={group}  alt='Shoes' />
                        </figure>

                        <div className='flex flex-col p-3 gap-0 items-end '>
                            <h2 className='card-title'>

                                <div className='badge badge-secondary bg-rose-500 text-white'>
                                الدمام
                                </div>
                                السعودية      
                            </h2>
                            <h4 className='flex gap-1 justify-center'>
                                <div className='text-sm'>   طريق الملك فهد  : زقاق عدد ٢</div>
                                <div className='text-sm font-semibold'>   : 1 الشارع  </div>
                            </h4>
                            <h4 className='flex gap-1 justify-center'>
                                <div className='text-sm'>     التخصصي  : زقاق عدد ٢< /div>
                                <div className='text-sm font-semibold'>   : 2 الشارع  </div>
                            </h4>
    
                        </div>
                
                
                    </div>
                </a>

                <a href="https://maps.app.goo.gl/RTQWtE2WJbScwwXt8">
                    <div className='card w-full text-end   shadow-xl cursor-pointer transition  text-black bg-white  '>
                        <figure>
                            <img src={group}  alt='Shoes' />
                        </figure>

                        <div className='flex flex-col p-3 gap-0 items-end '>
                            <h2 className='card-title'>

                                <div className='badge badge-secondary bg-rose-500 text-white'>
                                جدة  
                                </div>
                                السعودية      
                            </h2>
                            <h4 className='flex gap-1 justify-center'>
                                <div className='text-sm'>   طريق الملك فهد  : زقاق عدد ٢</div>
                                <div className='text-sm font-semibold'>   : 1 الشارع  </div>
                            </h4>
                            <h4 className='flex gap-1 justify-center'>
                                <div className='text-sm'>     التخصصي  : زقاق عدد ٢< /div>
                                <div className='text-sm font-semibold'>   : 2 الشارع  </div>
                            </h4>
    
                        </div>
                
                
                    </div>
                </a>

               
                

         
            </div>
        </div>
  )
}

export default Madinati
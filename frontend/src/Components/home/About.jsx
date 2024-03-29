import React from 'react'

import { IoMdCheckmark } from "react-icons/io";
import group from '../../images/about/group.jpg' ;

const About = () => {
  return (
        <div className='flex flex-col items-center gap-10 w-full ' id='about'>
            
            <div className='font-bold text-lg md:text-4xl text-white'>قصتنا</div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mx-[5%] bg-neutral-700 rounded-2xl p-3'>

                <div className='w-[90%] m-auto'>
                    
                    <img src={group} className='rounded-xl' alt="" />
                </div>

                <div className='w-full flex flex-col gap-10'>
                    
                    <div className='flex flex-col gap-2 w-full'>
                        <div className='font-bold text-lg md:text-2xl text-white '>Be Green</div>
                        <div className='font-semibold text-sm md:text-lg text-green-500 text-end'>نحن منظمة نعمل على</div>
                        <p className='text-xs md:text-lg text-end'>  . تحقيق تأثير إيجابي على بيئتنا من خلال إعادة التدوير  <br/> يؤمن فريقنا المخلص بقوة التثقيف ومشاركة المجتمع لدفع التغيير الفعّال </p>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <div className='flex flex-col gap-2 '>
                            <div className='font-bold text-lg md:text-2xl text-white text-end'>رسالتنا</div>
                            <div className='text-xs text-end'> نحن ملتزمون بتوعية الناس حول أهمية إعادة التدوير وتمكينهم من المشاركة في هذه الحركة البيئية الحيوية. من خلال التثقيف والتوعية والعمل الفعّال، نسعى لخلق مستقبل أخضر أكثر استدامة للأجيال القادمة. </div>
                            <div className='flex flex-col items-end '>
                                <div className='flex items-center  gap-3 text-xs md:text-sm ml-4 '>
                                    <div> التواصل التثقيفي </div>
                                    <IoMdCheckmark/>
                                </div>
                                <div className='flex items-center gap-3 text-xs md:text-sm ml-4'>
                                    <div> الشراكات </div>
                                    <IoMdCheckmark/>

                                </div>
                                <div className='flex items-center gap-3 text-xs md:text-sm ml-4'>
                                    <div> الدعوة والتوجيه </div>
                                    <IoMdCheckmark/>

                                </div>
                                <div className='flex items-center gap-3 text-xs md:text-sm ml-4'>
                                    <div> العمل الفعّال </div>
                                    <IoMdCheckmark/>

                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 '>
                            <div className='flex flex-col'>
                                <div className='font-bold text-4xl text-teal-500 text-end'>2024</div>
                                <div className='text-end text-xs'>تأسست</div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='font-bold text-4xl text-teal-500 text-end'>1,8B</div>
                                <div className='text-end text-xs'>تم اعادة تدوير</div>
                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>
        </div>

  )
}

export default About
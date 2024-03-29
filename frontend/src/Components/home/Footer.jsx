import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {

  return (

    
    <div>
  <footer className="bg-gray-800 text-white py-8 text-end">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0 text-end">
          <h3 className="text-lg font-semibold mb-2 flex justify-end gap-2 md:pr-10">حول <div className='text-teal-500'>منظمتنا</div></h3>
          <p className="text-sm p-2  md:pr-10 ">  منظمتنا مكرسة لتحقيق تأثير إيجابي في المجتمع. نقدم مجموعة متنوعة من الخدمات والدعم لتعزيز حياة الأفراد والمجتمعات
نحن ملتزمون بتوعية الناس حول أهمية إعادة التدوير وتمكينهم من المشاركة في هذه الحركة البيئية الحيوية. من خلال التثقيف والتوعية والعمل الفعّال، نسعى لخلق مستقبل أخضر أكثر استدامة للأجيال القادمة.  </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2 text-teal-500">تواصل معنا</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-teal-400 hover:text-teal-600">
              <FaFacebook size={25}/>
            </a>
            <a href="#" className="text-teal-400 hover:text-teal-600">
              <AiFillInstagram size={25}/>
            </a>
            <a href="#" className="text-teal-400 hover:text-teal-600">
              <FaTwitter size={25}/>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm">
        <p>الأسئلة الشائعة | <a href="#about" className="text-teal-400 hover:text-teal-600">سياسة الخصوصية</a> | <a href="#" className="text-teal-400 hover:text-teal-600">شروط الاستخدام</a></p>
      </div>
    </div>
  </footer>
  <div className="bg-gray-800 text-white py-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
        <p className="text-sm mb-2 sm:mb-0">Be Green</p>
        <p className="text-sm">© {new Date().getFullYear()}  RBS team </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer
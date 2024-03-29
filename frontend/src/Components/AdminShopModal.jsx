import React from 'react'
import carrfour from "../images/carrfour.svg";

import pubg from "../images/pubg.png";

import epic from "../images/epic.png";
import appstore from "../images/pAppStore.svg";
import bniya from "../images/bniya.png";
import express from "../images/express.png";

const AdminShopModal = ({title,point}) => {

  

  return (


    <dialog id="my_modal_1" className="modal">

        <div className="modal-box bg-white text-black">
            <div className='bg-white flex flex-col items-center p-2 rounded-lg shadow-lg border-black border-solid border-2 '>
                <div className='font-semibold'>شكرا لك على الشراء </div>
                <div className='font-semibold'>{title}</div>
                <div className='text-red-500'>- {point} points</div> 
                <div>تم تأكيد الطلب</div>
                
            </div>

            <h2 className='text-end m-2'>ا كوبون خصم</h2>
            <div className='text-center bg-green-300 m-2 font-semibold'>wtqiw-144wq-pioou-bv32</div>
            <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn text-white" >اغلق</button>
                </form>
            </div>
        </div>
    </dialog>
  )
}

export default AdminShopModal
import React, { useState } from 'react'
import avatar from "../../assets/images/avatar-icon.png"
import {FormatDate} from "../../utils/FormatDate"
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from './FeedbackForm';

const Feedback = () => {

    const [showFeedbackform , setShowFeedbackForm] = useState(false)



  return (
   <>
   <div>
    <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
            All Reviews (272)
        </h4>

        <div className='flex justify-between gap-10 mb-[30px]'>
            <div className="flex gap-3">
                <figure className='w-10 h-10 rounded-full'>
                    <img src={avatar} alt="" className='w-full'/>
                </figure>

                <div>
                    <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>Ali Ahmed</h5>
                    <p className='text-[14px] leading-6 text-textColor'>{FormatDate('02-14-2023')}</p>
                    <p className='text-[15px] leading-[30px] font-medium text-textColor mt-3'>
                        Good services!! Highly recommended!!
                    </p>
                </div>
            </div>

            <div className='flex  gap-1'>
                {[...Array(5).keys()].map((_ , index)=><AiFillStar key={index} color="#0067ff"/>)}
            </div>

        </div>

    </div>


    {!showFeedbackform && <div className='text-center'>
            <button className='bg-primaryColor py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-38px' onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button>
    </div>}

    {showFeedbackform && <FeedbackForm/>}

   </div>

   </>
  )
}

export default Feedback
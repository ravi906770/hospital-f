import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const FeedbackForm = () => {

    const [rating , setRating] = useState(0)
    const [hover , setHover] = useState(0);
    const [reviewText , setReviewText] = useState('');

    const handleSubmit = async(e)=>{
        e.preventDefault();

    }

  return (
    <form action="">
    <div>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4'>
            How would you rate the overall experience?
        </h3>
        <div>
            {[...Array(5).keys()].map((_,index)=>{
                index+=1
                return  (<button type='button' key={index} className={`${index <=((rating && hover) || hover) ? 'text-yellowColor' : 'text-gray-400' } bg-transparent border-none outline-none text-[22px] cursor-pointer`} onClick={()=>setRating(index)} onMouseEnter={()=>setHover(index)} onMouseLeave={()=>setRating(rating)} onDoubleClick={()=>{setHover(0); setRating(0)}}><span>
                        <AiFillStar/>
                    </span>
                </button>)
            })}
        </div>
    </div>

    <div className='mt-[30px]'>
    <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4'>
           Share your feedback or suggestions!
        </h3>
    <textarea className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md'   rows="5" placeholder='Give your feedback!!' onChange={(e)=>setReviewText(e.target.value)}></textarea>
    </div>

    <button type='submit' onClick={handleSubmit} className='bg-primaryColor py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-38px'>
            Submit Feedback
    </button>
    </form>
    
  )
}

export default FeedbackForm
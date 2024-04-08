import React from 'react'

const SidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
        <div className='flex items-center justify-between'>
            <p className='text-[18px] leading-[30px] font-semibold text-textColor mt-0 '>Ticket Price</p>
            <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>500 ₹</span>
        </div>
        <div className='mt-[30px]'>
        <p className='text-[18px] leading-[30px] font-semibold text-textColor mt-0 '>Available Time Slots:</p>
        <ul className='mt-3'>
            <li className='flex items-center justify-between mb-2'>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>Monday</p>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>4:00 PM - 9:00 PM</p>
            </li>
            <li className='flex items-center justify-between mb-2'>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>Tuesday</p>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>10:00 AM - 2:00 PM</p>
            </li>
            <li className='flex items-center justify-between mb-2'>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>Wednesday</p>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>5:00 PM - 8:30 PM</p>
            </li>
        </ul>
        </div>
        <button className=' bg-primaryColor py-[15px] rounded-md px-3 text-white  font-[600] mt-[38px] w-full '>Book Appointment</button>
    </div>
  )
}

export default SidePanel
import React from 'react'
import { FormatDate } from "../../utils/FormatDate"

const DoctorAbout = () => {
    return (
        <>
            <div>
                <div>
                    <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                        About of
                        <span className='text-irisBlueColor font-bold text-[24px] leaing-9'>Dr.Kaushik Raval</span>
                    </h3>
                    <p className='text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem labore eius provident quod odit maiores quisquam reiciendis officia porro nesciunt, cum excepturi, perspiciatis consequatur error architecto incidunt eveniet assumenda repellat a nisi quia. Fugit, repellat! Dolorem nemo ipsum inventore voluptatibus qui pariatur soluta similique tenetur laborum voluptatem incidunt nesciunt est cupiditate odio facere placeat saepe, voluptas velit. Ipsam, facilis ut.
                    </p>
                </div>


                <div className='mt-12'>
                    <h3 className='text-[20px] leading-[30px] font-semibold text-headingColor'>
                        Education
                    </h3>

                    <ul className='pt-4 md:p-5'>
                        <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[38px]'>
                            <div>
                                <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                                    {FormatDate('01-04-2010')} -  {FormatDate('01-04-2012')}
                                </span>
                                <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                            </div>
                            <p className='text-[14px] leading-5 font-medium text-textColor'>Civil Hospital , Ahmedabad</p>
                        </li>
                        <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[38px]'>
                            <div>
                                <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                                    {FormatDate('04-04-2012')} - {FormatDate('04-04-2014')}
                                </span>
                                <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                            </div>
                            <p className='text-[14px] leading-5 font-medium text-textColor'>Civil Hospital , Ahmedabad</p>
                        </li>
                        <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[38px]'>
                            <div>
                                <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                                    {FormatDate('12-04-2014')} -  {FormatDate('12-04-2016')}
                                </span>
                                <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                            </div>
                            <p className='text-[14px] leading-5 font-medium text-textColor'>Civil Hospital , Ahmedabad</p>
                        </li>
                    </ul>

                </div>

                <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] font-semibold text-headingColor'>
                Experience
            </h3>

            <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {FormatDate('12-04-2014')} -  {FormatDate('12-04-2016')}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>Civil Hospital , Ahmedabad</p>
                </li>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {FormatDate('12-04-2014')} -  {FormatDate('12-04-2016')}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>Civil Hospital , Ahmedabad</p>
                </li>
                
            </ul>

            </div>

            </div>
        </>
    )
}

export default DoctorAbout
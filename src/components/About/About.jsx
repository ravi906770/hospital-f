import React from 'react'
import aboutImg from "../../assets/images/about.png"
import aboutCardImg from "../../assets/images/about-card.png"
import { Link } from 'react-router-dom'

const About = () => {
  return (
   <section>
    <div className="container  max-w-full w-[1440px] px-5 mx-auto">
    <div className="lg:w-[470px] mx-auto">
            <h2 className="text-[44px] leading-[54px] font-[700] text-headingColor text-center">About Us</h2>
            <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px] text-center">World-class care for everyone. Our Health System offers unnmatched, expert health care.</p>
          </div>

        <div className="flex justify-between gap-[50px]  lg:gap-[130px] xl:gap-0 flex-col lg:flex-row mt-[15px]">
            { /*================= About img ===============*/}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                <img src={aboutImg} alt="" />
                <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                    <img src={aboutCardImg} alt="" />
                </div>
            </div>

            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 mr-10'>
                <h2 className='text-[44px] leading-[54px] font-[700] text-headingColor'>
                    Proud to be one of  the nations best
                </h2>
                <p className='text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo culpa vel ipsa sit, atque autem pariatur eligendi natus nihil rerum placeat, modi error? Voluptate, reiciendis.
                </p>

                <p className='text-[18px] leading-[30px] font-[400] text-textColor mt-[30px]'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo culpa vel ipsa sit, atque autem pariatur eligendi natus nihil rerum placeat, modi error? Voluptate, reiciendis.
                </p>

                <Link to="/">
                    <button className='bg-primaryColor py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[25px]'>Learn More</button>
                </Link>
            </div>

        </div>
    </div>
   </section>
  )
}

export default About
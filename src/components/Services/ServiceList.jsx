import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ServiceList = () => {
  return (
    <section className="py-[25px]">
    <div className="max-w-full w-[1440px] px-5 mx-auto">
      <div className="lg:w-[470px] mx-auto">
        <h2 className="text-[44px] leading-[54px] font-[700] text-headingColor text-center">Our Services</h2>
        <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px] text-center">World-class care for everyone. Our Health System offers unnmatched, expert health care.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px0 lg:mt-[55px]">

        <div className="py-[30px] px-5">
          <div className="mt-[30px]">
            <h2 className="text-[30px] leading-9 text-headingColor font-bold">Cancer Care</h2>
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">World-class care for everyone. Our Health System offers unnmatched, expert health care.</p>
            <div className="flex justify-between">
              <div>
                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
              <div className="flex w-10 h-10 bg-purple-500 justify-center items-center mt-[30px] ">
                <h1 className="font-bold">1</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[30px] px-5">
          <div className="mt-[30px]">
            <h2 className="text-[30px] leading-9 text-headingColor font-bold">Gynaecology Surgery</h2>
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">World-class care for everyone. Our Health System offers unnmatched, expert health care.</p>
            <div className="flex justify-between">
              <div>
                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
              <div className="flex w-10 h-10 bg-green-300 justify-center items-center mt-[30px] ">
                <h1 className="font-bold">2</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[30px] px-5">
          <div className="mt-[30px]">
            <h2 className="text-[30px] leading-9 text-headingColor font-bold">Orthopaedic Surgery</h2>
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">World-class care for everyone. Our Health System offers unnmatched, expert health care.</p>
            <div className="flex justify-between">
              <div>
                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
              <div className="flex w-10 h-10 bg-red-300 justify-center items-center mt-[30px] ">
                <h1 className="font-bold">3</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[30px] px-5">
          <div className="mt-[30px]">
            <h2 className="text-[30px] leading-9 text-headingColor font-bold">Cardiologiest</h2>
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">World-class care for everyone. Our Health System offers unnmatched, expert health care.</p>
            <div className="flex justify-between">
              <div>
                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
              <div className="flex w-10 h-10 bg-yellow-300 justify-center items-center mt-[30px] ">
                <h1 className="font-bold">4</h1>
              </div>
            </div>
          </div>
        </div>


        <div className="py-[30px] px-5">
          <div className="mt-[30px]">
            <h2 className="text-[30px] leading-9 text-headingColor font-bold">Neurology</h2>
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">World-class care for everyone. Our Health System offers unnmatched, expert health care.</p>
            <div className="flex justify-between">
              <div>
                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
              <div className="flex w-10 h-10 bg-blue-300 justify-center items-center mt-[30px] ">
                <h1 className="font-bold">5</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[30px] px-5">
          <div className="mt-[30px]">
            <h2 className="text-[30px] leading-9 text-headingColor font-bold">Nutrition and Dietetics</h2>
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">World-class care for everyone. Our Health System offers unnmatched, expert health care.</p>
            <div className="flex justify-between">
              <div>
                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
              <div className="flex w-10 h-10 bg-pink-300 justify-center items-center mt-[30px] ">
                <h1 className="font-bold">6</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default ServiceList
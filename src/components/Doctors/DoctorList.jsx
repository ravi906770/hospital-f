import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import star from "../../assets/images/Star.png"
import { doctors } from "../../assets/data/doctors";

const DoctorList = ()=>{
  return (
  <>
    <section className="py-[25px]">
        <div className="max-w-full w-[1440px] px-5 mx-auto">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="text-[44px] leading-[54px] font-[700] text-headingColor text-center">Our Doctor's Team</h2>
            <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px] text-center">World-class care for everyone. Our Health System offers unnmatched, expert health care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px0 lg:mt-[55px]">
          {doctors.map(doctor=>{
            return <div className="py-[30px] px-5">
              <div className="flex">
                <img src={doctor.photo} alt="" className="w-full" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[30px] leading-9 text-headingColor font-bold">{doctor.name}</h2>
                <div className="flex justify-between">
                  <div className="flex w-15 h-10 bg-red-200 justify-center items-center mt-[15px] px-[10px] rounded-full">
                    <h2 className="font-bold">{doctor.specialty}</h2>
                  </div>
                  <div className="flex w-15 h-10 justify-center items-center mt-[15px] px-[10px]">
                    <img src={star} alt="" className="mx-2" />
                    <h2 className="font-bold">{doctor.avgRating}</h2>
                    <h4 className="font-medium">({doctor.totalRating})</h4>
                  </div>
                </div>

                <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">
                      +{doctor.totalPatients} Patients
                    </h3>
                  </div>
                </div>

                <div className="flex justify-between">

                <div className="flex w-full text-textColor mt-[30px] justify-between items-center">
                    <h1 className="font-400">At {doctor.hospital}</h1>
                  </div>
                  <div>
                    <Link to="/doctors/:id" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                      <BsArrowRight className="group-hover:text-white w-6 h-5" />
                    </Link>
                  </div>
                  
                </div>
              </div>
            </div>
          })}



          </div>
        </div>
      </section>
  </>
  )
    
}

export default DoctorList;
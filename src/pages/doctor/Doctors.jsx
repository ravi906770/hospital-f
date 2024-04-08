import React from "react";
import DoctorList from "../../components/Doctors/DoctorList"
import { doctors } from "../../assets/data/doctors";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import star from "../../assets/images/Star.png"
import Testimonial from "../../components/Testimonial/Testimonial";

const Doctors = ()=>{
  return (
  <>
  <section className="bg-[#fff9ea]">
    <div className="max-w-full w-[1440px] px-5 mx-auto text-center">
        <h2 className="text-[44px] leading-[54px] font-[700] text-headingColor">Find a Doctor</h2>

        <div className="max-w-[570px] mt-[38px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
          <input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline:none cursor-pointer placeholder:text-textColor" placeholder="Search Doctor"/>
          <button className="bg-primaryColor py-[15px] px-[35px] rounded-[0px] text-white font-[600] mt-0 rounded-r-md">Search</button>
        </div>
    </div>
  </section>


    <section>
      <div className="max-w-full w-[1440px] px-5 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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



    <section>
      <div className="container max-w-full w-[1440px] px-5 mx-auto">
      <div className="lg:w-[500px] mx-auto mt-10">
          <h2 className="text-[44px] leading-[54px] font-[700] text-headingColor text-center">What our patients say</h2>
          <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px] text-center">Our Commitment to Simplifying Your Financial Journey.</p>
      </div>

<Testimonial/>

        </div>
      </section>

  </>
  )
    
}

export default Doctors;
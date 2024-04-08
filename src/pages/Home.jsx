import React from "react";
import heroImg01 from "../assets/images/hero-img01.png"
import heroImg02 from "../assets/images/hero-img02.png"
import heroImg03 from "../assets/images/hero-img03.png"
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import featureImg from "../assets/images/feature-img.png"
import videoIcon from "../assets/images/video-icon.png"
import avatarIcon from "../assets/images/avatar-icon.png"
import faqimg from "../assets/images/faq-img.png"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import Doctors from "./doctor/Doctors";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/FAQ/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* ================== Hero Section ================== */}

      <section className=" flex items-center bg-[url(./assets/images/hero-bg.png)] bg-no-repeat bg-center bg-cover py-[60px] 2xl:h-[800px]">
        <div className="max-w-full w-[1440px] px-5 mx-auto">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

            {/* ================== Hero Content ================== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">We help patients live a healthy, longer life.
                </h1>


                <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]">Reliable healthcare for all. Access comprehensive coverage and specialized care tailored to your needs. Prioritizing your well-being with top-tier services. Your health, our commitment.
                </p>

                <button className="bg-primaryColor py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px]">Book an Appointment</button>
              </div>


              {/* Hero Counter*/}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px] ">

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading=[54px] font-700 text-headingColor">30+</h2>
                  <span className="w-[90px] h-2 bg-yellowColor rounded-full block ml-[-4px]"></span>
                  <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading=[54px] font-700 text-headingColor">15+</h2>
                  <span className="w-[90px] h-2 bg-purpleColor rounded-full block ml-[-4px]"></span>
                  <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]">Clinic Loaction</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading=[54px] font-700 text-headingColor">100%</h2>
                  <span className="w-[90px] h-2 bg-irisBlueColor rounded-full block ml-[-4px]"></span>
                  <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]">Patient Satisfacction</p>
                </div>

              </div>

            </div>
            {/* ================== Hero Content ================== */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg02} alt="" />
                <img className="w-full" src={heroImg03} alt="" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================== Hero Section End ================== */}
      <section className="py-[25px]">
        <div className="max-w-full w-[1440px] px-5 mx-auto">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="text-[44px] leading-[54px] font-[700] text-headingColor text-center"> Providing the best medical services</h2>
            <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px] text-center">World-class care for everyone. Our Health System offers unnmatched, expert health care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px0 lg:mt-[55px]">

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor FONT-[700] text-center">Find a Doctor</h2>
                <p className="text-[16px] leading-7 font-[400] text-textColor mt-4  text-center">World-class care for everyone. Our Health System offers unnmatched, expert health care.</p>

                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor FONT-[700] text-center">Book Appointment</h2>
                <p className="text-[16px] leading-7 font-[400] text-textColor mt-4  text-center">Easily schedule appointments at your convenience. Fast, simple, and hassle-free booking process awaits</p>

                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>


            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor FONT-[700] text-center">Find a Doctor</h2>
                <p className="text-[16px] leading-7 font-[400] text-textColor mt-4  text-center">Find your doctor easily! Browse, book, and manage appointments seamlessly. Your health journey starts here.</p>

                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>


      <About />

      {/* ================== Service section ================== */}

      <ServiceList />

      {/* ================== feature section ================== */}
      <section>
        <div className="max-w-full w-[1440px] px-5 mx-auto">
          <div className="flex items-center justify-between flex-col lg:flex-row">

            <div className="xl:w-[670px]">
              <h2 className="text-[44px] leading-[54px] font-[700] text-headingColor">
                Get Virtual Treatment <br />Anytimme.
              </h2>
              <ul className="pl-4">
                <li className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]">1. Schedule the appointment directly.</li>
                <li className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]">2. Search your physician here , and contact their office.</li>
                <li className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]">3. View your  physicians who are accepting new patients , use the online scheduling tool to select an appointment time.</li>
              </ul>
              <Link>
                <button className="bg-primaryColor py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px]">Learn More</button>
              </Link>
            </div>

            {/* feature img  */}

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] mg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px]  leading-[10px] lg:text-[14px] text-headingColor lg:leading-5 font-[600]">Tue 24</p>
                    <p className="text-[10px]  leading-[10px] lg:text-[14px] text-textColor lg:leading-5 font-[600]">10:00 AM</p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] ">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>
                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                    Consultation
                </div>


                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Dr.Kaushik Raval
                  </h4>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================== Doctor section ================== */}

      <DoctorList />

      {/* ================== FAQ section ================== */}

      <section>
        <div className="container max-w-full w-[1440px] px-5 mx-auto">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqimg} alt="" />
            </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-[44px] leading-[54px] font-[700] text-headingColor">Most questions by over beloved patients</h2>
            <FaqList/>


          </div>

          </div>
        </div>
      </section>


      {/* ================== Testimonial section ================== */}

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

export default Home;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import register from "../../assets/images/signup.gif"
import bg from "../../assets/images/hero-bg.png"

const Login = () => {

  const [formData , setFormData] = useState({
    email : "",
    password : ""
  })

  return (
    <>
      <section className="px-5 lg:px-0">
        <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
          <h3 className="text-headingColor text-[22px] leading-0 font-bold mb-10">
            Hello! <span className="text-primaryColor">Welcome</span> Back
          </h3>

          <form className="py-4 md:py-0">
              <div className="mb-5">
                <input type="email" placeholder="Enter Your Email" name="email" value={formData.email} className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer" required/>
              </div>
              <div className="mb-5">
                <input type="password" placeholder="Enter Your Password" name="password" value={formData.password} className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" required/>
              </div>


              <div className="mt-7">
                <button type="submit" className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">Login</button>
              </div>


            <p className="mt-5 text-textColor text-center">
              Don&apos;t have an account? <Link to="/register" className="text-primaryColor">Register</Link>
            </p>


          </form>
        </div>
      </section>
    </>

  )

}

export default Login;
import React from "react";
import  Home from "../pages/Home"
import Services from "../pages/Services"
import Login from "../pages/auth/Login"
import SignUp from "../pages/auth/SignUp"
import Contact from "../pages/Contact";
import Doctors from "../pages/doctor/Doctors";
import DoctorsDetails from "../pages/doctor/DoctorsDetails"


import {BrowserRouter,Routes , Route} from "react-router-dom"

const Router = () => {
    return ( 
<>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route exact path="/home" element={<Home/>}/>
    <Route exact path="/services" element={<Services/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/register" element={<SignUp/>}/>
    <Route exact path="/doctors" element={<Doctors/>}/>
    <Route exact path="/doctors/:id" element={<DoctorsDetails/>}/>

</Routes>
</>

)
};

export default Router;
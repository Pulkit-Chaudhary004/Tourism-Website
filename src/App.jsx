import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import {Navigate} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import HomePage from "./Pages/HomePage";
import AboutKashmir from './Pages/AboutKashmir';
import Footer from './Components/Footer/Footer';
import SignUp from './Pages/SignUp/SignUp';
import ContactUs from './Pages/ContactUs';
import TravelUpdates from './Pages/TravelUpdates'



function App(){
  return (
  <>
  <Router>
    <Navbar/>
      <Routes>
        { <Route path="/" element={<HomePage/>}/> }
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/AboutKashmir" element={<AboutKashmir/>}/>
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/TravelUpdates" element={<TravelUpdates/>}/>
      </Routes>
      <Footer  article="https://the-shooting-star.com/what-no-one-tells-you-about-visiting-kashmir/"
      facebook="https://www.facebook.com/login/"
      twitter="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
      google="https://myaccount.google.com/?nlr=1"
      instagram="https://www.instagram.com/accounts/login/?hl=en"
      linkedin="https://www.linkedin.com/in/chaudharypulkit/"
      github="https://github.com/"
      />
       </Router>

    
  </>
  )
}

export default App



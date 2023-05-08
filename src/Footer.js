import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

function Footer() {
  return (
   <>
   
   <div className='container-fluid bg-dark text-light border-top'></div>
   <br></br><br></br>
   <div className='container-sm '>
    <div className='row'>
        <div className='col-12 col-md-4 col-lg-3 text-start'>
        <div className='row'>
                            <img className='col-md-5 col-4 col-lg-5 img-responsive' src="images/logog.png" alt="" />
                        </div>
            <br></br>
            <br></br>
            {/* <h6>@2021</h6> */}
        </div>
        <div className='col-12 col-md-4 col-lg-3'>
            <h6>Explore</h6>
            <h6>Country</h6>
            <h6>Course</h6>
            <h6>Exam</h6>
            <h6>Collages</h6>
            
        </div>
        <div className='col-12 col-md-4 col-lg-3'>
            <h6>About Us</h6>
            <h6>Contact Us</h6>
            <h6>Creare</h6>
            <h6></h6>
            <h6>About Us</h6>
            <h6>About Us</h6>
        </div>
        <div className='col-12 col-md-4 col-lg-3 '>
            <h5>Subscribe our email letter</h5>
            <input></input>
            <br></br>
            {/* <h6>@2021</h6> */}
        </div>
    </div>
    <div className='row p-3'>
        <div className='col-12 col-md-4 col-lg-6 text-start'>
            <h6>@2021</h6>
        </div>
        <div className='col-12 col-md-4 col-lg-6 text-end'>
            <h6>Humstudy.com</h6>
        </div>
    </div>
   </div>
   
   
   
   </>
  );
}

export default Footer;

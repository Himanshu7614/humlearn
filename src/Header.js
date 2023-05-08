import React from 'react';
import University from './University';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function Header() {
  return (
 <nav className='navbar navbar-expand-sm '>
                    <div className='container-sm  '>
                        <div className='row'>
                            <img className='col-md-5 col-4 col-lg-5 img-responsive' src="images/logog.png" alt="" />
                        </div>

                        <button className='navbar-toggler' data-toggle='collapse' data-target='#mynav'>
                            <span className='navbar-toggler-icon'></span>
                        </button>

                        <div className='collapse navbar-collapse m-auto' id='mynav'>
                            <ul className='navbar-nav m-auto '>
                                <li className='nav-item'><a className='nav-link active' href=''>Home</a></li>
                                <li className='nav-item'><a className='nav-link active' href=''>Course</a></li>
                                <li className='nav-item'><a className='nav-link active'><Link to = '/University.js'>College</Link></a></li>
                                <li className='nav-item'><a className='nav-link active' href=''>About</a></li>
                                <li className='nav-item'><a className='nav-link active' href=''>Contacts</a></li>
                                <li className='nav-item'><a className='nav-link active' href=''>More</a></li>
                            </ul>

                            <button className='btn colcolour text-light'> LOGIN</button>

                        </div>
                    </div>
                </nav>
  );
}
export default Header;

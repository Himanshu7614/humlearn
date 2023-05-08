import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

function University() {
  return (
   <>
   <div className='container-sm'>
          <div className="row"> 
          <br></br><br></br><br></br><br></br><br></br>
          <div className='col-12 col-md-7 col-lg-4 bd'>
          <br></br><br></br><br></br><br></br>
              <div className='w-75 h-75'><img className=' col-12' src="images/main.png"></img></div>
              <h6 className='card-text colcolour rounded p-2 text-light text-start'>lorem njfo adueka</h6>
            </div>  
            <div className='col-4'></div>     
            <div className='col-12 col-md-4 col-lg-2'>
            <br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br>
            <div><img className=' col-12' src="images/main.png"></img></div>
            </div>
            <div className='col-12 col-md-4 col-lg-2'>
            <br></br><br></br><br></br><br></br>
            <div><img className=' col-10' src="images/main.png"></img></div>
            <div><img className=' col-10' src="images/main.png"></img></div>
            </div>               
        </div>
    </div>
    <br></br><br></br><br></br><br></br><br></br>

    <div className='container-sm'>
        <div className='row'>
        <div className='col-12 col-md-4 col-lg-4  text-start'>
        <br></br><br></br>
            <h4>Student </h4>
            <p>Hello buddy</p>
            <br></br>
            <h4>Since 2002 </h4>
            <p>Hello buddy</p>
            <br></br>
            <h4>6 Faculties </h4>
            <p>Hello buddy</p>
            <br></br>
        </div>
        <div className='col-12 col-md-4 col-lg-8 border rounded p-5 text-start'>
            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
        </div>
        </div>
        <br></br><br></br><br></br><br></br><br></br>
      <div className='container-sm'>
      <div className='row'>
        <div className='col-12 col-md-4 col-lg-12 border rounded p-5 text-start'>
        <h3>Hello</h3>
        <br></br><br></br>

            <div className='row'>
              <div className='col-3'>Button</div>
              <div className='col-3'>Button</div>
              <div className='col-3'>Button</div>
              <div className='col-3'>Button</div>
            </div>
        </div>
        </div>
      </div>
      <br></br><br></br>
      <br></br><br></br>

      <div className='container-sm'>
      <div className='row border rounded p-5 text-start'>
      <h1>Hello buddy</h1>
              <div className='col-4 border rounded '>Button</div>
              <div className='col-6 border rounded '>Button</div>
            </div>
      </div>

    </div>
   </>
  );
}

export default University;

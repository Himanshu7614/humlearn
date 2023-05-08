import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import University from './University';

// import {grid} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
function Home(){
  return (
  <> 
  <Header></Header>
  <div className=' rounded container-fluid'>
  <div className='container-lg'>
    <br></br><br></br><br></br><br></br>

    <div className='container-sm'>
          <div className="row">            
            <div className='col-12 col-md-4 col-lg-6'>
            <br></br><br></br><br></br><br></br><br></br>
              <h2 className='card-tittel text-start'> HUMTUDAY, WAY TO GET OUT THE WORLD</h2>
              <p className='card-text text-start'>Lorem Ipsum is simply dummy text dummy Lorem Ipsum is simply dummy text dummy</p>
            </div>
            <div className='col-md-1 col-lg-1'>             
            </div>
            <div className='col-12 col-md-7 col-lg-5 bd'>
              <div className='card w-75 h-75'><img src="images/main.png"></img></div>
            </div>
          </div>
          <br></br><br></br>

      <div className='row text-start border rounded  g-3 p-3'>
      <br></br><br></br><br></br><br></br><br></br>

      <div className='col-12 col-md-6 col-lg-2'></div>
            <div className='col-12 col-md-6 col-lg-2'>
                  <div className=' col-8 rounded card d-flex justify-content-center '>
                    <img className="rounded" src="images/hhh.png"></img>             
                  </div>
            </div>
            <div className='col-12 col-md-6 col-lg-2'>
                  <div className='rounded card d-flex justify-content-center col-8 '>
                    <img className="rounded" src="images/hhh.png"></img>             
                  </div>
            </div>
            <div className='col-12 col-md-6 col-lg-2 '>
                  <div className='rounded card d-flex justify-content-center  col-8'>
                    <img className="rounded" src="images/hhh.png"></img>             
                  </div>
            </div>
            <div className='col-12 col-md-6 col-lg-2'>
                  <div className='rounded card d-flex justify-content-center  col-8'>
                    <img className="rounded" src="images/hhh.png"></img>             
                  </div>
            </div>
            <div className='col-12 col-md-6 col-lg-2'></div>
      </div>
  </div>
    </div>
    </div>
    <br></br><br></br><br></br><br></br>
    <div className='container-sm '>
      <div className='row text-start '>
        <div className='col-12 col-md-6 col-lg-4 col-12 col-md-6 col-lg-4 text-left rounded pt-2 colcolour '>
            <h3 className='colcolour text-light'>FIND YOUR UNIVERCSTY</h3>
        </div>
      </div>
      <br></br>
      <div className='row text-start '>
        <div className='col-12 col-md-6 col-lg-4 col-12 col-md-6 col-lg-6 text-left rounded pt-2 colcolour'>
            <h5 className='colcolour text-light'>Lorem Ipsum is simply dummy text dummy simply</h5>
        </div>
      </div> 
      <br></br><br></br>
      <div className='row g-3 colcolour1 p-4  rounded d-flex justify-content-center'>             
      <div className='col-12 col-md-6 col-lg-3 '>
                  <div className='rounded card colcolour p-3 '>
                    <img className=" rounded colcolour d-flex justify-content-center" src="images/hhh.png"></img> 
                    <div className='card-body colcolour'>
                      <h5 className='card-tittel colcolour text-light text-start'>Hello this is cource</h5>
                      <p className='card-text colcolour  text-light text-start'>lorem lisp hsnakm fhakjdur njfo adueka</p>
                    </div>                  
                  </div>
            </div> 
            <div className='col-12 col-md-6 col-lg-3'>
                  <div className='rounded card colcolour p-3'>
                    <img className="rounded colcolour  d-flex justify-content-between" src="images/hhh.png"></img> 
                    <div className='card-body colcolour'>
                      <h5 className='card-tittel colcolour text-light text-start'>Hello this is cource</h5>
                      <p className='card-text colcolour text-light text-start'>lorem lisp hsnakm fhakjdur njfo adueka</p>
                    </div>                  
                  </div>
            </div>
            <div className='col-12 col-md-6 col-lg-3 '>
                  <div className='rounded card colcolour p-3'>
                    <img className="rounded colcolour  d-flex justify-content-between" src="images/hhh.png"></img> 
                    <div className='card-body colcolour'>
                      <h5 className='card-tittel colcolour text-light text-start'>Hello this is cource</h5>
                      <p className='card-text colcolour text-light text-start'>lorem lisp hsnakm fhakjdur njfo adueka</p>
                    </div>                  
                  </div>
            </div>   
            <div className='col-12 col-md-6 col-lg-3 '>
                  <div className='rounded card colcolour p-3'>
                    <img className="rounded colcolour d-flex justify-content-between" src="images/hhh.png"></img> 
                    <div className='card-body colcolour'>
                      <h5 className='card-tittel colcolour text-light text-start'>Hello this is cource</h5>
                      <p className='card-text colcolour text-light text-start'>lorem lisp hsnakm fhakjdur njfo adueka</p>
                    </div>                  
                  </div>
            </div>   
      </div>
      </div> 
    <br></br><br></br><br></br><br></br>
    <div className='container-sm'>
        <div className='row'>
          <div className='col-12 col-md-4 col-lg-4 '></div>
          <div className='col-12 col-md-4 col-lg-4 colcolour text-light  rounded pt-2'><h2 className=' colcolour text-light'>COUNTRY</h2></div>
          <div className='col-12 col-md-4 col-lg-4'></div>
        </div>
    <br></br><br></br><br></br><br></br>
    <div className='row'>          
          <div className='col-12 col-md-3 col-lg-3 p-4 '>
            <h4 className='text-start colcolour rounded text-light p-3'>MORE COURCES</h4>
            <p className='card-text colcolour text-start rounded text-light p-3'>Know more about us</p>
            </div>
          <div className='col-md-1 col-lg-1'></div>
          <div className='col-12 col-md-2 col-lg-2'>
            <div className='rounded-end-circle'>
              <img className="col-11 rounded-circle bg-light " src="images/hjhj.png"></img>
            </div>
          </div>
          <div className='col-md-1 col-lg-1'></div>
          <div className='col-12 col-md-2 col-lg-2'>
            <div className='rounded-end-circle'>
              <img className="col-12  rounded-circle bg-light" src="images/hjhj.png"></img>
            </div>
          </div>
          <div className='col-md-1 col-lg-1'></div>
          <div className='col-12 col-md-2 col-lg-2'>
            <div className='rounded-end-circle'>
              <img className="col-12  rounded-circle bg-light" src="images/hjhj.png"></img>
            </div>
          </div>
        </div>
    </div>
    <br></br><br></br><br></br><br></br>
    <div className='container-sm'>
      <div className='row'>
        <div className=' col-4'></div>  
        <div className='col-4 ' ><h2 className='colcolour text-light rounded p-2' >Feedback Form</h2><br></br></div> 
        <div className=' col-4'></div>   

      </div>
      </div>
      <br></br><br></br><br></br><br></br>
    <div className='container-sm'>
      <div className='row'>
        <div className=' col-4'></div>  
        <div className='col-4 ' ><h2 className='colcolour text-light rounded p-2' >Questions</h2><br></br></div> 
        <div className=' col-4'></div>    

      </div>
      <div className='row  m-3 border border-success colcolour rounded p-30 '>
              <div className='col-11 p-3 pl-3 text-start colcolour '>                
                <h4 className='card-tittel colcolour'>Q5. Hello</h4>
                <p className='card-text colcolour'>lorem lorem lisp hsnakm fhakjdur njfo adueka lorem lisp hsnakm fhakjdur njfo adueka</p>
              </div>
              <div className='col-1 colcolour'>
                <h2 className='colcolour'>+</h2>
              </div>
        </div>
        <div className='row  m-3 border border-success colcolour rounded p-30 '>
              <div className='col-11 p-3 pl-3 text-start colcolour '>                
                <h4 className='card-tittel colcolour'>Q5. Hello</h4>
                <p className='card-text colcolour'>lorem lorem lisp hsnakm fhakjdur njfo adueka lorem lisp hsnakm fhakjdur njfo adueka</p>
              </div>
              <div className='col-1 colcolour'>
                <h2 className='colcolour'>+</h2>
              </div>
        </div>
        <div className='row  m-3 border border-success colcolour rounded p-30 '>
              <div className='col-11 p-3 pl-3 text-start colcolour '>                
                <h4 className='card-tittel colcolour'>Q5. Hello</h4>
                <p className='card-text colcolour'>lorem lorem lisp hsnakm fhakjdur njfo adueka lorem lisp hsnakm fhakjdur njfo adueka</p>
              </div>
              <div className='col-1 colcolour'>
                <h2 className='colcolour'>+</h2>
              </div>
        </div>
        <div className='row  m-3 border border-success colcolour rounded p-30 '>
              <div className='col-11 p-3 pl-3 text-start colcolour '>                
                <h4 className='card-tittel colcolour'>Q5. Hello</h4>
                <p className='card-text colcolour'>lorem lorem lisp hsnakm fhakjdur njfo adueka lorem lisp hsnakm fhakjdur njfo adueka</p>
              </div>
              <div className='col-1 colcolour'>
                <h2 className='colcolour'>+</h2>
              </div>
        </div>
        <div className='row  m-3 border border-success colcolour rounded p-30 '>
              <div className='col-11 p-3 pl-3 text-start colcolour '>                
                <h4 className='card-tittel colcolour'>Q5. Hello</h4>
                <p className='card-text colcolour'>lorem lorem lisp hsnakm fhakjdur njfo adueka lorem lisp hsnakm fhakjdur njfo adueka</p>
              </div>
              <div className='col-1 colcolour'>
                <h2 className='colcolour'>+</h2>
              </div>
        </div>
      </div>
      <br></br><br></br>

      <Footer/>
      {/* <University/> */}
  </>
  );
}

export default Home;

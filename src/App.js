// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home';
// import Footer from './Footer';
// import Contact from './Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <div className='App m-2'>

    
    <Router>
    <Routes>
        <Route exact path='/' element={< Home />}></Route>
        {/* <Route exact path='/about' element={< About />}></Route> */}
        {/* <Route exact path='/' element={< Footer />}></Route> */}
      
      </Routes>
  </Router>
  {/* <Footer></Footer> */}
  </div>
    
  );
}

export default App;

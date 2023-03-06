import React from 'react'
import Signup from './components/Signup';
import Button from 'react-bootstrap/Button';
import './css.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { button } from 'react-bootstrap';
import Login from './components/Login';
import Home from './Home';
import Home2 from './components/Home2';
import Pagenotfount from './components/Pagenotfount';
import About from './components/About';

const App1 = () => {
  return (
    <div>
        <Router>
        <Home/>
            <Routes>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/home2' element={<Home2/>}/>
                <Route path='*' element={<Pagenotfount/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>

        </Router>
        </div>
  )
}

export default App1
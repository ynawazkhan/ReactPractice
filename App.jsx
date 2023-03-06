import React from 'react'
import Signup from './components/Signup';
import Login from './components/Login';
import Button from 'react-bootstrap/Button';
import './css.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
        <Signup/>
    </div>
  )
}

export default App
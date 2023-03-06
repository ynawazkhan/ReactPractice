import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Home = () => {
  return (
    <div>
    <div>
    <ToastContainer/>
    </div>
    <center>
     <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    className='nav'>
      <Nav.Item>
        <Nav.Link ><Link to="/signup">Sign up</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"><Link to="/login">Login</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2"><Link to="/about">About</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Profile
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </center>
    </div>
  )
}

export default Home
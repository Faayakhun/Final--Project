import '../App.css';
import React from 'react';
// import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import {Navbar , Nav , Button} from 'react-bootstrap';  
import emblem from './asset/logo-adamandor-plain.png'
//import ButtonLogout from './ButtonLogout';

function Navigation() {

 // const isLogged = useSelector((state) => state.Sign.Log);

    return (
        <div>

        <Navbar bg="white" className="fixed-top py-0" id="navbar">
        <Navbar.Brand href="#home">
          <div id="navbarEmblemFrame">
            <img src={emblem} id="navbarEmblem"/>
          </div>
        </Navbar.Brand>
          <Nav className="mr-auto d-flex flex-lg-row w-100">
          <Link to = "/#" className="nav-link">Home</Link>
          <Link to = "/#" className="nav-link">Service</Link>
          <Link to = "/#" className="nav-link">About Us</Link>
          <Link to = "/#" className="nav-link">Articles</Link>
          <Link to = "/#" className="nav-link">Testimonial</Link>
          <Link to = "/#" className="nav-link">Contact Us</Link>
         
          </Nav>
        </Navbar>

        </div>
    )
}

export default Navigation

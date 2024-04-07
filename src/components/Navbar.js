import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import Home from './Home';
import PlaceIcon from '@mui/icons-material/Place';
import { Email } from '@mui/icons-material';

const routes = [
  { name: "home", path: "/", component: <Home /> }
]


const Navbar = () => {
  const [dropdownClicked, setDropDownClicked] = useState(false);
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
    // Listen for scroll events
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > 70) { // Change 100 to the desired scroll position
        // Update the state to indicate that the user has scrolled
        setScrolled(true);
      } else {
        // Update the state to indicate that the user hasn't scrolled
        setScrolled(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <nav className={`navbar navbar-expand-md fixed-top navbar-dark ${scrolled ? 'scrolled bg-dark': ''}`}>
      <div className={`info ${scrolled ? 'scrolled':''}`}>
        <div className="item">
          <PlaceIcon className='icon' />
          <span className='details'>Ralph Shodeinde Street, Central Business District.</span>
        </div>
        <div className="item">
          <Email className='icon' />
          <a href="mailto:recipient@example.com" className='details'>dekeji1@gmail.com</a>
        </div>
      </div>
      <div className="container-fluid my-auto">
        <Link className="navbar-brand logo" to="/" onClick={() => setShow(false)}><img src={require("../imgs/logo.png")} alt="" /></Link>
        <button className="navbar-toggler" type="button" onClick={toggleShow}>
          <span className="navbar-toggler-icon my-navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${show ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={() => { setShow(false) }}>Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/company" className="nav-link" onClick={() => { setShow(false) }}>Company</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/services" className="nav-link" onClick={() => { setShow(false) }}>Services</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/projects" onClick={() => { setShow(false) }}>Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={() => { setShow(false) }}>Contact</NavLink>
            </li>

          </ul>
          <li className="nav-item nav-item-special ">
            <NavLink className="nav-link " to="/give" onClick={() => { setShow(false) }}>Give</NavLink>
          </li>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
import React from 'react';
import './NavBar.css';
import logo from '../../images/logo.svg';


const NavBar = () => {
      return (
          <nav className="navBar">
              <div className="navContainer">
                  <img className="logo" src={logo} alt="logo"/>
                  <button className="navBtn">try it free</button>
              </div>
          </nav>
      )
}



export default NavBar;
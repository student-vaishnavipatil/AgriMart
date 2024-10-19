import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid p-2">
        <NavLink className="navbar-brand" style={{color:"white"}} to="/">AgriMart</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink className="nav-link text-light" activeClassName="active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/features">Features</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/pricing">Pricing</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/action">Markets</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Services">Services</NavLink></li>
                <li><NavLink className="dropdown-item" to="#">Mandi Prices</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="login">
          {/* <button type="button" className='button'><NavLink to="/login"></NavLink>Login<NavLink/></button> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="button" activeClassName="active" to="/login">Login</NavLink>
            </li>
            </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

function NavBar() {
  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#" className="logo">Job<span>Portal</span></a>
        </div>
        <div className="nav__menu__btn" id="menu-btn">
          <i className="ri-menu-line"></i>
        </div>
      </div>
      <ul className="nav__links" id="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/jobs" className={({ isActive }) => isActive ? 'active' : undefined}>
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : undefined}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/client" className={({ isActive }) => isActive ? 'active' : undefined}>
            Client
          </NavLink>
        </li>
        <li>
          {/* Add the Post link here */}
          {/* <a href="#post-section" className="nav__link">
            Post
          </a> */}
          <NavLink to="/post" className={({ isActive }) => isActive ? 'active' : undefined}>
            Post
          </NavLink>
        </li>
        <li>
          <NavLink to="/registerForm" className={({ isActive }) => isActive ? 'active' : 'btn'}>
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

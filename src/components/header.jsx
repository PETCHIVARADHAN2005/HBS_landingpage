import React, { useState } from 'react'
import '../styles/header.css'
const Header = () => {
  const [mobileMenuOpen,setMobileMenuOpen]=useState(false)
  return (
    <header className='header'>
      <div className='container header-container'>
        <div className='logo'>
          <img src='../src/images/logo.png' alt="logo" />
          <h1>MediCare</h1>
        </div>
        <button className='nav-toggle' onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}>
          <i className={`fas ${mobileMenuOpen ? 'fa-times':'fa-bars'}`}></i>
        </button>
      <nav className={`nav-menu ${mobileMenuOpen ? 'active':' '}`}>
        <ul>
          <li><a href="#" className='active'>Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Doctors</a></li>
          <li><a href="#">Departments</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <a href="#" className='btn btn-primary'>Book Appointment</a>
      </nav>
      </div>
    </header>
  )
}

export default Header
import React from 'react'
import  '../styles/footer.css'
const Footer = () => {
  return (
    <footer>
    <div className='container'>
      <div className='footer-grid'>
        <div className='footer-col'>
          <h3>MediCare Hospital</h3>
          <p>
            Providing expectional healthcare services since 1990.We're commited
            to delivering the highest quality care to our patients. 
          </p>
        </div>
        <div className='footer-col'>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Our Doctors</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          </div>
          <div className='footer-col'>
            <h3>Contact Us</h3>
            <p><i className='fas fa-map-marker-alt'></i>123 Hospital Street,Medical City</p>
            <p><i className='fas fa-phone'></i>(123) 456-7890</p>
            <p><i className='fas fa-envelope'></i>info@medicare-hospital.com</p>
          </div>
          <div className='footer-col'>
            <h3>Working Hours</h3>
            <p>Monday - Friday:8:00 AM - 8:00 PM</p>
            <p>Saturday:9:00 AM - 8:00 PM</p>
            <p>Sunday:6:00 PM - 8:00 PM</p>
            <p><strong>Emergency: 24/7</strong></p>
          </div>
      </div>
      <div className='footer-bottom'>
            <p>&copy; 2025 MediCare Hospital. All rights reserved.</p>
      </div>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import '../styles/heroSection.css'
const Herosection = () => {
  return (
    <section className='hero'>
      <div className='container hero-content'>
        <div className='hero-text'>
          <h2>Your Health, Our Priority</h2>
          <p>
          At MediCare Hospital, we are dedicated to providing the highest quality healthcare services to our patients. Our team of experienced doctors, nurses, and staff are committed to delivering compassionate and personalized care to every patient.
          </p>
          <div className='hero-buttons'>
            <a href="#" className='btn btn-primary'>Book an Appointment</a>
            <a href="#" className='btn btn-secondary'>Learn More</a>
          </div>
        </div>
        <div className='hero-image'>
          <img src="../src/images/hospital.png" alt="hospital" />
        </div>
      </div>
    </section>
  )
}

export default Herosection
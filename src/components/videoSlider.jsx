import React, { useEffect, useRef, useState } from 'react';
import '../styles/videoSlider.css';

const VideoSlider = () => {
  const slides = [
    {
      id: 1,
      type: 'video',
      videoSrc: "../public/videos/video1.mp4",
      posterSrc: "https://img.youtube.com/vi/HMjc-UHyDjk/maxresdefault.jpg",
      title: "State of the Art Facilities",
      description: "Tour our state-of-the-art facilities and see why we are the preferred choice for healthcare in the region."
    },
    {
      id: 2,
      type: 'image',
      imageSrc: "../public/images/equipments.png", 
      title: "Advanced Medical Equipment",
      description: "Our hospital features the latest medical technology to provide the best care possible to our patients."
    },
    {
      id: 3,
      type: 'image',
      imageSrc: "../public/images/staff.png", 
      title: "Experienced Medical Staff",
      description: "Our team of experienced doctors and nurses is dedicated to providing exceptional care to our patients."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);
  const videoRef = useRef(null); // Reference for video

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval.current);
  }, []);

  const pauseSlider = () => {
    clearInterval(slideInterval.current);
  };

  const resumeSlider = () => {
    slideInterval.current = setInterval(nextSlide, 5000);
  };

  // Pause video when slide changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [currentSlide]);

  const renderMedia = (slide) => {
    if (slide.type === 'video') {
      return (
        <video 
          ref={videoRef} 
          src={slide.videoSrc} 
          poster={slide.posterSrc}
          controls
          className="media-item"
        ></video>
      );
    } else if (slide.type === 'image') {
      return (
        <img 
          src={slide.imageSrc} 
          alt={slide.title} 
          className="media-item" 
        />
      );
    }
    return null;
  };

  return (
    <section className="slider-section">
      <div className="container video-container">
        <div className="section-title">
          <h2>Discover Our Hospital</h2>
        </div>
        <div className="slider-container" onMouseEnter={pauseSlider} onMouseLeave={resumeSlider}>
          <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide) => (
              <div className="slide" key={slide.id}>
                <div className="media-container">
                  {renderMedia(slide)}
                </div>
                <div className="slide-content">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-dots">
            {slides.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`} 
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
          <div className="slider-nav">
            <button onClick={prevSlide} className="nav-btn prev-btn"><i className="fas fa-chevron-left"></i></button>
            <button onClick={nextSlide} className="nav-btn next-btn"><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;

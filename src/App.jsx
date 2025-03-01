// App.js - Main application file
import React from 'react';
import Header from './components/header';
import Herosection from './components/herosection';
import VideoSlider from './components/videoSlider';
import Footer from './components/footer';
import './styles/App.css';
function App() {
  return (
    <div className="app">
      <Header />
      <Herosection/>
      <VideoSlider/>
      <Footer/>
    </div>
  );
}

export default App;

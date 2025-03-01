// App.js - Main application file
import React from 'react';
import Header from './components/header.jsx';
import Herosection from './components/herosection.jsx';
import VideoSlider from './components/videoSlider.jsx';
import Footer from './components/footer.jsx';
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

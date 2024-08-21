// AboutUs.js
import React from 'react';
import './about.css'; // Import the CSS file for styling
import { FaPhone } from 'react-icons/fa'; // Import React icons
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 

const AboutUs = () => {
  return (
    <div>
      <header>
        <div className="start">
          <div className="content flex_space">
            <div className="logo">
              <img src="https://i.ibb.co/p48GmW7/IMG-20240814-052612.jpg" alt="Logo" />
            </div>
            <div className="navlinks">
              <ul id="menulists">
                <li><a href="#home">Home</a></li>
                <li><a href="#workshops" className="yogaworkshops" style={{ color: 'teal', fontWeight: '800' }}>Yoga Workshops</a></li>
                <li><a href="#meditation-workshops">Meditation Workshops</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="/">Log Out</a></li>
           
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="hero">
        <div className="container">
          <div className="article">
            <div className="title">
              <h1>About Us</h1>
            </div>
            <div className="content">
              <h3>Embrace Your Journey with Us</h3>
              <p>
                Welcome to our yoga and wellness retreat, where tranquility meets transformation. Our retreat is designed to rejuvenate your mind, body, and spirit through a blend of yoga, meditation, and holistic wellness practices. Our experienced instructors and serene environment create the perfect space for you to reconnect with yourself and discover inner peace.
              </p>
            </div>
          </div>
          <div className="image-section">
            <img src="https://photos.tpn.to/ej/lh/sq/ei/653x490.jpg" alt="Retreat Image" />
          </div>
        </div>
      </div>

      <div className="contact-info">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="contact-item">
            <FaPhone /> 
            <span className="contact-text">☎: (+91) 9701113599</span>
          </div>
          <div className="contact-item">
            <i className="ri-mail-line"></i> 
            <span className="contact-text">✉: info@yogaretreat.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
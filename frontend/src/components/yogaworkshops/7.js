import React, { useState } from 'react';
import './1.css'; // Import CSS file
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 
function Work7() {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const showBookingFormHandler = () => {
    setShowBookingForm(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const confirmBooking = (event) => {
    event.preventDefault();
    window.open('success.html', '_blank');
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img
            src="https://i.ibb.co/p48GmW7/IMG-20240814-052612.jpg"
            alt="Logo"
          />
        </div>
        <div className="navlinks">
          <span
            className="fas fa-bars"
            onClick={toggleMenu}
          />
          <ul className={menuOpen ? 'menulists active' : 'menulists'}>
            <li><a href="#home" className="home">Home</a></li>
            <li><a href="#workshops">Yoga Workshops</a></li>
            <li><a href="#Meditation Workshops">Meditation Workshops</a></li>
            <li><a href="#Aboutus">About us</a></li>
            <li><a href="/">Log Out</a></li>
           
          </ul>
        </div>
      </header>

      <div className="content">
        <div className="image">
          <img src="https://i.ibb.co/hH3T41q/images-13.jpg" alt="Workshop 1" />
          <img src="https://i.ibb.co/XbNGFVL/images-14.jpg" alt="Workshop 2" />
          <img src="https://i.ibb.co/qRCC7j0/images-15.jpg" alt="Workshop 3" />
          <img src="https://i.ibb.co/rvdqdvM/images-16.jpg" alt="Workshop 4" />
        </div>
        <div className="workshop-details" id="workshops">
          <h1>7 Day Wellness Yoga Retreat</h1>
          <p>
            Take this opportunity and dive into the magic world of surf and yoga! When doing both yoga and surfing, you will discover a new natural flow within yourself and your performance. You can find fluidity in life and surf while enjoying a luxury short trip to the Ocean Lodge. Being out in the ocean can be one of the deepest and most fulfilling experiences you ever made. It is food for your soul. It can change your perspective on your life. So, be prepared and find some excitement in the ocean!
          </p>
          <ul>
            <li>Holistic Wellness: Engage in personalized yoga and Ayurveda sessions tailored to all skill levels.</li>
            <li>Farm-to-Table Dining: Savor delicious, pesticide-free meals made from ingredients grown on our organic farm.</li>
            <li>Sustainable Living: Enjoy a serene environment powered entirely by solar energy, reflecting our commitment to sustainability.</li>
            <li>Natural Rejuvenation: Experience stress relief, better sleep, enhanced fitness, and overall well-being in our toxin-free sanctuary.</li>
          </ul>
          <br /><br />
          <div className="location">
            <h3>Location: Portugal</h3>
            <p>
              Porto (30 kilometers - 30 minutes)<br />
              Aveiro<br />
              Ovar
            </p>
          </div>
          <div className="price">
            <h3>Price:</h3>
            <p style={{ fontSize: '20px' }}>Rs.7000/-</p>
            <h3>Instructors: Ricardo and Isabel</h3>
          </div>
          <Link to={"/register"}>
            <Button colorScheme="teal.600">Register</Button>
          </Link>   </div>

        
      </div>
    </div>
  );
}

export default Work7;

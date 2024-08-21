import React, { useState } from 'react';
import './1.css'; // Import CSS file
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 
function Work14() {
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
          <img src="https://i.ibb.co/xYtkzK1/y7.jpg" alt="Workshop 1" />
          <img src="https://i.ibb.co/sJGJmwm/y8.jpg" alt="Workshop 2" />
          <img src="https://i.ibb.co/StT90Jd/y9.jpg" alt="Workshop 3" />
          <img src="https://i.ibb.co/vsnY0gF/y10.jpg" alt="Workshop 4" />
        </div>
        <div className="workshop-details" id="workshops">
          <h1>7 Day Elemental Yoga Retreat in Tulum</h1>
          <p>
            Join Copal Retreat for a week of daily ocean-front sunrise and sunset yoga, amazing food, jungle and beach adventures and tours and much more. Andrew works with the 4 yoga paths focusing on integrative practice that lives on and off the yoga mat.
          </p>
          <div className="location">
            <h3>Location:</h3>
            <p>Oceanfront villa in the Mexican Riviera Maya, Paa Mul, an hour from Cancun International Airport.</p>
          </div>
          <div className="price">
            <h3>Price:</h3>
            <p style={{ fontSize: '20px' }}>Rs.242,009/-</p>
            <h3>Instructors:</h3>
            <p>Andrew Figueras</p>
          </div>
          <Link to={"/register"}>
            <Button colorScheme="teal.600">Register</Button>
          </Link>   </div>

      </div>
    </div>
  );
}

export default Work14;

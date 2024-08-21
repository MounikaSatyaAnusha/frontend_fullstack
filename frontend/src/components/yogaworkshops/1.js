import React, { useState } from 'react';
import './1.css'; // Import CSS file
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; // Import Link from React Router DOM

function Work1() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
          <img src="https://i.ibb.co/nB3Nd6m/IMG-20240814-052745.jpg" alt="Workshop 1" />
          <img src="https://i.ibb.co/JFwkK2B/IMG-20240814-052816.jpg" alt="Workshop 2" />
          <img src="https://i.ibb.co/mGjWtPX/IMG-20240814-052847.jpg" alt="Workshop 3" />
          <img src="https://i.ibb.co/gF1npLz/IMG-20240814-053020.jpg" alt="Workshop 4" />
        </div>
        <div className="workshop-details" id="workshops">
          <h1>20 Day Yoga and Ayurveda Retreat in Kerala</h1>
          <p>Escape to Antharyamin, an eco-friendly resort in Kerala, India. Nestled in the Sahyadri Mountains...</p>
          <ul>
            <li>Holistic Wellness...</li>
            <li>Farm-to-Table Dining...</li>
            <li>Sustainable Living...</li>
            <li>Natural Rejuvenation...</li>
          </ul>
          <div className="location">
            <h3>Location: Kerala</h3>
            <p>Latitude: 8.6053° N<br />
               Longitude: 77.0685° E<br /><br />
               Nearest Railway Station: Thiruvananthapuram Central Railway Station, approximately 30 minutes away<br />
               Nearest City: Thiruvananthapuram, about 15 km away</p>
          </div>
          <div className="price">
            <h3>Price:</h3>
            <p className="price-amount">Rs.50000/-</p>
            <h3>Instructor: Raju Ji, Elena</h3>
          </div>
           <Link to={"/register"}>
            <Button colorScheme="teal.600">Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Work1;

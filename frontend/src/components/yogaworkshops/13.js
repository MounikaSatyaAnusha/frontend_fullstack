import React, { useState } from 'react';
import './1.css'; // Import CSS file
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 
function Work13() {
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
          <img src="https://i.ibb.co/qjxM0ZN/y11.jpg" alt="Workshop 1" />
          <img src="https://i.ibb.co/HFLtDrS/y12.jpg" alt="Workshop 2" />
          <img src="https://i.ibb.co/nB3Nd6m/IMG-20240814-052745.jpg" alt="Workshop 3" />
          <img src="https://i.ibb.co/mGjWtPX/IMG-20240814-052847.jpg" alt="Workshop 4" />
        </div>
        <div className="workshop-details" id="workshops">
          <h1>All-inclusive Yoga Retreat in Indonesia</h1>
          <p>
            Embrace the tranquility of Bali Hill Retreat, an all-inclusive paradise in Tabanan, Bali. Enjoy diverse culinary experiences, from regular and vegetarian menus to detox options, all prepared by a dedicated team. Unwind at the spa with traditional Balinese treatments, both indoor and outdoor. Daily 90-minute morning yoga and meditation sessions await, along with 90-minute afternoon yoga every other day. Immerse yourself in local culture and support sustainable eco-cultural tourism in this charming village setting. Experience relaxation, wellness, and the beauty of Bali at this serene retreat.
          </p>  
          <div className="location">
            <h3>Location:</h3>
            <p>Bali Hill Retreat, Banjar, Jl. Sesandan Desa, Megati, Kec. Selemadeg Tim., Kabupaten Tabanan, Bali 82162, Indonesia</p>
          </div>
          <div className="price">
            <h3>Price:</h3>
            <p style={{ fontSize: '20px' }}>Rs.242,009/-</p>
            <h3>Instructors:</h3>
            <p>Teddi, Eli</p>
          </div>
            <Link to={"/register"}>
            <Button colorScheme="teal.600">Register</Button>
          </Link>   </div>

      </div>
    </div>
  );
}

export default Work13;

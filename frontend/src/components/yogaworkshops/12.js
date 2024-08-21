import React, { useState } from 'react';
import './1.css'; // Import CSS file
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 
function Work12() {
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
          <img src="https://i.ibb.co/27sQRZx/med7.webp" alt="Workshop 1" />
          <img src="https://i.ibb.co/y5ffKqj/med10.jpg" alt="Workshop 2" />
          <img src="https://i.ibb.co/FqgQgQN/med12.jpg" alt="Workshop 3" />
          <img src="https://i.ibb.co/kmWZcRC/images-9.jpg" alt="Workshop 4" />
        </div>
        <div className="workshop-details" id="workshops">
          <h1>Rejuvenating Yoga Retreat USA</h1>
          <p>
            Soak in the healing waters of the Sangre de Cristo Mountains and rejuvenate yourself in the healing space that nature and this sacred valley provides! Practice women’s yoga, delight in healthy organic eating, and commune with a beautiful circle of women’s workshops in the majesty of the Colorado Rocky Mountains. You will spend your weekend together reconnecting with yourselves, communing with nature, nourishing yourselves with seasonal organic food cooked with love, and awakening your wild feminine nature!
          </p>
          <div className="location">
            <h3>Location:</h3>
            <p>
              Joyful Journey Hotspring and Spa, 28640 County Rd 58EE, Moffat, Colorado 81143, USA
            </p>
          </div>
          <div className="price">
            <h3>Price:</h3>
            <p style={{ fontSize: '20px' }}>Rs.56,202/-</p>
            <h3>Instructors:</h3>
            <p>Sue Van Raes</p>
          </div>
           <Link to={"/register"}>
            <Button colorScheme="teal.600">Register</Button>
          </Link>   </div>

      </div>
    </div>
  );
}

export default Work12;

import React, { useState } from 'react';
import './1.css'; // Import CSS file
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 
function Work11() {
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
          <img src="https://i.ibb.co/NZBQXKZ/images-11.jpg" alt="Workshop 1" />
          <img src="https://i.ibb.co/hH3T41q/images-13.jpg" alt="Workshop 2" />
          <img src="https://i.ibb.co/rvdqdvM/images-16.jpg" alt="Workshop 3" />
          <img src="https://i.ibb.co/yNr47tk/images-17.jpg" alt="Workshop 4" />
        </div>
        <div className="workshop-details" id="workshops">
          <h1>Yoga Retreat Sri Lanka</h1>
          <p>
            Take a break from your daily life - take time for yourself and reconnect to nature and your true self. Fresh air, long walks, good locally grown food, combined with stimulating and relaxing yoga set with the backdrop of Victoria Lake and the Knuckles Mountains. Come and experience the freedom of Welikande with its nearby waterfalls and abundant wildlife.
          </p>
          <div className="location">
            <h3>Location:</h3>
            <p>
              Welikande Hotel and Trekking Center, 234 Siridigan Rd Pussallegolla, Udispattuwa, Kandy District, Knuckles Mountains, Kandy, Sri Lanka
            </p>
          </div>
          <div className="price">
            <h3>Price:</h3>
            <p style={{ fontSize: '20px' }}>Rs.75,656/-</p>
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

export default Work11;

import React, { useState } from 'react';
import './1.css'; // Import CSS file
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 
function Work8() {
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
          <img src="https://i.ibb.co/yNr47tk/images-17.jpg" alt="Workshop 1" />
          <img src="https://i.ibb.co/nB3Nd6m/IMG-20240814-052745.jpg" alt="Workshop 2" />
          <img src="https://i.ibb.co/JFwkK2B/IMG-20240814-052816.jpg" alt="Workshop 3" />
          <img src="https://i.ibb.co/mGjWtPX/IMG-20240814-052847.jpg" alt="Workshop 4" />
        </div>
        <div className="workshop-details" id="workshops">
          <h1>5 Day Flexible Summer Retreat on Sardinia</h1>
          <p>
            Enjoy the Sardinian summer with this new way of holiday! Treat yourself to a complete recharge from your busy daily life in this magical new boutique hotel and retreat venue surrounded by nature in a private valley, just a few kilometers from the azure blue Mediterranean sea and sandy beaches. Amazing rooms made with love and natural materials. Meet like-minded people, enjoy delicious vegetarian food, and read your book around the sea-view pool and spa. Participate as much as you like in the three daily classes such as yoga, meditation, dance, breathwork, and sound healing. Choose how many days you would like to come and select your start date. Everything is included; simply arrive and relax. Immerse yourself in the magical Sardinian vibe.
          </p>
          <ul>
            <li>Holistic Wellness: Engage in personalized yoga and Ayurveda sessions tailored to all skill levels.</li>
            <li>Farm-to-Table Dining: Savor delicious, pesticide-free meals made from ingredients grown on our organic farm.</li>
            <li>Sustainable Living: Enjoy a serene environment powered entirely by solar energy, reflecting our commitment to sustainability.</li>
            <li>Natural Rejuvenation: Experience stress relief, better sleep, enhanced fitness, and overall well-being in our toxin-free sanctuary.</li>
          </ul>
          <div className="location">
            <h3>Location: Italy</h3>
            <p>
              Sea and beaches: 3 kilometers<br />
              Cagliari International Airport: 45 minutes - 45 kilometers
            </p>
          </div>
          <div className="price">
            <h3>Price:</h3>
            <p style={{ fontSize: '20px' }}>Rs.9000/-</p>
            <h3>Instructor: Sabrina Kamal Anne</h3>
          </div>
          <Link to={"/register"}>
            <Button colorScheme="teal.600">Register</Button>
          </Link>   </div>

        
      </div>
    </div>
  );
}

export default Work8;

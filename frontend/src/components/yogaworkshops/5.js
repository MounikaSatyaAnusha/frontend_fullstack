import React, { useState } from 'react';
import './1.css'; // Import CSS file
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 
function Work5() {
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
          <img src="https://i.ibb.co/y5ffKqj/med10.jpg" alt="Workshop 1" />
          <img src="https://i.ibb.co/WGq4xdg/med11.jpg" alt="Workshop 2" />
          <img src="https://i.ibb.co/FqgQgQN/med12.jpg" alt="Workshop 3" />
          <img src="https://i.ibb.co/4FnMB8X/med13.jpg" alt="Workshop 4" />
        </div>
        <div className="workshop-details" id="workshops">
          <h1>3 Day Rural Yoga Retreat in Fonollosa, Catalonia</h1>
          <p>
            Can Mussol Anima Mundi retreats offers you a complete rest and relaxation space in the beautiful Spanish countryside. Take a break from the stressful urban lifestyle, and spend the weekend practicing Hatha yoga, meditating, and eating healthy vegetarian and vegan-friendly food. A home away from home, allowing you time to disconnect, rejuvenate, and work on your inner self in the blissful nature of Canet de Fals. You will leave the retreat feeling relaxed, positive, and energized.
          </p>
          <ul>
            <li>Holistic Wellness: Engage in personalized yoga and Ayurveda sessions tailored to all skill levels.</li>
            <li>Farm-to-Table Dining: Savor delicious, pesticide-free meals made from ingredients grown on our organic farm.</li>
            <li>Sustainable Living: Enjoy a serene environment powered entirely by solar energy, reflecting our commitment to sustainability.</li>
            <li>Natural Rejuvenation: Experience stress relief, better sleep, enhanced fitness, and overall well-being in our toxin-free sanctuary.</li>
          </ul>
          <div className="location">
            <h3>Location: Spain</h3>
            <p>
              The retreat takes place in a historical country house located in the middle of nature. It is about one hour traveling from the charming Barcelona, Spain, and 30 minutes of traveling by car from beautiful and inspirational Montserrat Mountain. The house is surrounded by vineyards and graceful grazing lands, with the astonishing mountains on the horizon. Full of herbs, almond trees, and some cows. Enjoy the rural atmosphere, relax in nature, and recharge your batteries!
            </p>
          </div>
          <div className="price">
            <h3>Price:</h3>
            <p style={{ fontSize: '20px' }}>Rs.50000/-</p>
            <h3>Instructor: Can Mussol</h3>
          </div>
          <Link to={"/register"}>
            <Button colorScheme="teal.600">Register</Button>
          </Link>    </div>

        
      </div>
    </div>
  );
}

export default Work5;

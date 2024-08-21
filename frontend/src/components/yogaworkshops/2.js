import React, { useState } from 'react';
import './1.css'; // Import CSS file
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 

function Work2() {
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
          <img src=" https://i.ibb.co/nbfYd55/IMG-20240814-052932.jpg" alt="Workshop 1" />
          <img src=" https://i.ibb.co/nbfYd55/IMG-20240814-052932.jpg" alt="Workshop 2" />
          <img src=" https://i.ibb.co/ZMMGxgx/meditation-beautiful-girl-meditating-nature-741910-8768.jpg" alt="Workshop 3" />
          <img src=" https://i.ibb.co/jLpt9sk/med2.jpg " alt="Workshop 4" />
        </div>
        <div className="workshop-details" id="workshops">
          <h1>20 Day Yoga and Ayurveda Retreat in Kerala</h1>
          <p>Escape to Antharyamin, an eco-friendly resort in Kerala, India. Nestled in the Sahyadri Mountains, our luxurious retreat offers a holistic experience to recharge your body, mind, and soul. Immerse yourself in this yoga and Ayurveda retreat, personalized for all skill levels. Indulge in pesticide-free, farm-to-table meals from their organic farm. With a commitment to sustainability, they provide a serene setting powered by solar energy. Discover rejuvenation, stress relief, better sleep, fitness, and a healthier you at our toxin-free haven in nature.</p>
          <ul>
            <li>Holistic Wellness: Engage in personalized yoga and Ayurveda sessions tailored to all skill levels.</li>
            <li>Farm-to-Table Dining: Savor delicious, pesticide-free meals made from ingredients grown on our organic farm.</li>
            <li>Sustainable Living: Enjoy a serene environment powered entirely by solar energy, reflecting our commitment to sustainability.</li>
            <li>Natural Rejuvenation: Experience stress relief, better sleep, enhanced fitness, and overall well-being in our toxin-free sanctuary.</li>
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

export default Work2;

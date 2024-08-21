import React, { useState } from 'react';
import './1.css'; // Import CSS file
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 

function Work3() {
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
          <img src="https://i.ibb.co/bm1sBqj/med3.jpg" alt="Workshop 1" />
          <img src="https://i.ibb.co/8Bwmvmx/med4.jpg" alt="Workshop 2" />
          <img src="https://i.ibb.co/vqFbHJ8/med5.jpg" alt="Workshop 3" />
          <img src="https://i.ibb.co/WnGPvW9/yoga-8843808-640.jpg" alt="Workshop 4" />
        </div>
        <div className="workshop-details" id="workshops">
          <h1>28 Day Ayurvedic Panchkarma Treatment and Yoga Retreat in Rishikesh</h1>
          <p>Yoganandham Yoga School in Rishikesh offers a 28-day Panchkarma and detox retreat which provides a rejuvenating experience to your body and mind. This retreat is a combination of Ayurveda and yoga. You will experience daily two hours of Ayurvedic treatment, which will purify your outer body as well as the inner body. This retreat also includes daily two hours of yoga sessions in which you will practice traditional-style Hatha yoga and meditation sessions.</p>
          <ul>
            <li>Holistic Wellness: Engage in personalized yoga and Ayurveda sessions tailored to all skill levels.</li>
            <li>Farm-to-Table Dining: Savor delicious, pesticide-free meals made from ingredients grown on our organic farm.</li>
            <li>Sustainable Living: Enjoy a serene environment powered entirely by solar energy, reflecting our commitment to sustainability.</li>
            <li>Natural Rejuvenation: Experience stress relief, better sleep, enhanced fitness, and overall well-being in our toxin-free sanctuary.</li>
          </ul>
          <div className="location">
            <h3>Location: India</h3>
            <p>Their center is located in the lap of nature in Bairagarh, Mohan Chatti. Their accommodation has a beautiful view of serene mountains. There are many nature trails nearby for peaceful walks in nature.</p>
          </div>
          <div className="price">
            <h3>Price:</h3>
            <p style={{ fontSize: '20px' }}>Rs.70000/-</p>
            <h3>Instructor: Yogacharya Manish Ayurvedacharya</h3>
          </div>
          <Link to={"/register"}>
            <Button colorScheme="teal.600">Register</Button>
          </Link>
        </div>

        
        
      </div>
    </div>
  );
}

export default Work3;

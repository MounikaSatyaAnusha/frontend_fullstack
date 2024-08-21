import React, { useState } from 'react';
import './1.css'; // Import CSS file
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 
function Work4() {
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
          <img src="https://i.ibb.co/pzwNP1N/med6.jpg" alt="Workshop 1" />
          <img src="https://i.ibb.co/27sQRZx/med7.webp" alt="Workshop 2" />
          <img src="https://i.ibb.co/6N0Y6T3/med8.webp" alt="Workshop 3" />
          <img src="https://i.ibb.co/7WtPnjQ/med9.jpg" alt="Workshop 4" />
        </div>
        <div className="workshop-details" id="workshops">
          <h1>8 Day Yoga and Meditation, Vegan Wellness Retreat, and More in Koh Phangan</h1>
          <p>Wonderland Healing Center welcomes you to enjoy a wide variety of yoga, Tai Chi, Qi Gong and meditation classes suitable for all levels practitioner. The program is designed to support a holistic experience and promote a deeper connection with your body, mind and spirit. Alongside the daily classes, they offer occasional harmonizing workshops and events, and guests can relax and renew with a Thai massage, or choose an in-room treatment from the extensive, holistic healing treatment menu. The luxurious facilities also include an outdoor pool and herbal steam sauna.</p>
          <ul>
            <li>Holistic Wellness: Engage in personalized yoga and Ayurveda sessions tailored to all skill levels.</li>
            <li>Farm-to-Table Dining: Savor delicious, pesticide-free meals made from ingredients grown on our organic farm.</li>
            <li>Sustainable Living: Enjoy a serene environment powered entirely by solar energy, reflecting our commitment to sustainability.</li>
            <li>Natural Rejuvenation: Experience stress relief, better sleep, enhanced fitness, and overall well-being in our toxin-free sanctuary.</li>
          </ul>
          <div className="location">
            <h3>Location: Thailand</h3>
            <p>Wonderland Healing Center is located in the heart of Ko Pha Ngan, an island paradise in the Gulf of Thailand. The resort is nestled among a lush, tropical forest with stunning mountain views, and is a 10-minute drive to several pristine beaches and local attractions; the perfect location to indulge in a wellness, yoga, and detox program. Wonderland boasts a beautiful outdoor pool, herbal steam sauna, juice bar, and vegan restaurant.</p>
          </div>
          <div className="price">
            <h3>Price:</h3>
            <p style={{ fontSize: '20px' }}>Rs.50000/-</p>
            <h3>Instructor: Aly Naama Connie</h3>
          </div>
          <Link to={"/register"}>
            <Button colorScheme="teal.600">Register</Button>
          </Link>
        </div>
     
      </div>
    </div>
  );
}

export default Work4;

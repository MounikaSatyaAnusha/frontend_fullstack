import React, { useState } from 'react';
import './1.css'; // Import CSS file
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 
function Work1() {
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
          <img src="https://i.ibb.co/YL7HHpG/yoga1-3.jpg" alt="Workshop 1" />
          <img src="https://i.ibb.co/CzRYKJ9/yogA6.jpg" alt="Workshop 2" />
          <img src="https://i.ibb.co/3rb4bLX/yoga1-4.jpg" alt="Workshop 3" />
        </div>
        <div className="workshop-details" id="workshops">
          <h1>18 Day Self-Discovery Yoga and Meditation Retreat in Rishikesh, Uttarakhand</h1>
          <p>
            Experience full yoga immersion, exploring multi-style yoga asana, meditation, and pranayama with Yogi Vimal's many years of experience and personal practice, including living alone in a cave. Dive deeper into yoga philosophy and ask your questions. Venture to sacred caves and temples, meet wise sadhus, witness Himalayan sunrises, meditate by the sacred Ganga, and join sacred ceremonies. Reawaken and revitalize in the ancient sanctity of Rishikesh.
          </p>
          <div className="location">
            <h3>Location:</h3>
            <p>Yoga Niketan Ashram, Muni Ki Reti, Rishikesh, Dehradun, Uttarakhand 249192, India</p>
          </div>
          <div className="price">
            <h3>Price:</h3>
            <p style={{ fontSize: '20px' }}>Rs.153,906/-</p>
            <h3>Instructors:</h3>
            <p>Vimal Barthwal, Elena</p>
          </div>
             <Link to={"/register"}>
            <Button colorScheme="teal.600">Register</Button>
          </Link>   </div>

      </div>
    </div>
  );
}

export default Work1;

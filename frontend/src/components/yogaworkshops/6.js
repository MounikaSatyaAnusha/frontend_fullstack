import React, { useState } from 'react';
import './1.css'; // Import CSS file
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 
function Work6() {
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
          <img src="https://i.ibb.co/kmWZcRC/images-9.jpg" alt="Workshop 1" />
          <img src="https://i.ibb.co/zbFrhpK/images-10.jpg" alt="Workshop 2" />
          <img src="https://i.ibb.co/NZBQXKZ/images-11.jpg" alt="Workshop 3" />
          <img src="https://i.ibb.co/68TJ505/images-12.jpg" alt="Workshop 4" />
        </div>
        <div className="workshop-details" id="workshops">
          <h1>4 Day Unwind and Rewild Women's Wellness Retreat in Sedona, Arizona</h1>
          <p>
            Join Retreats and More in Sedona for an intimate, fun, and energetically revitalizing women's wellness getaway where you get to reconnect, relax, and raise your personal vibration. What does it mean to 'rewild'? Rewilding means to return to a more wild or natural state; it is the process of undoing domestication. Rewilding is an approach to living a more holistic life. You will bask in the moonlight, soak up the sun, and pamper yourself until the day is done! All skill levels are welcome. Retreats and More welcome all women to experience their retreats, so beginners and experienced are encouraged to attend. Retreats and More caters to both solos and groups of friends traveling together. This retreat will be an all-inclusive experience with a limited number of participants. Reserve your space soon to guarantee your spot!
          </p>
          <ul>
            <li>Holistic Wellness: Engage in personalized yoga and Ayurveda sessions tailored to all skill levels.</li>
            <li>Farm-to-Table Dining: Savor delicious, pesticide-free meals made from ingredients grown on our organic farm.</li>
            <li>Sustainable Living: Enjoy a serene environment powered entirely by solar energy, reflecting our commitment to sustainability.</li>
            <li>Natural Rejuvenation: Experience stress relief, better sleep, enhanced fitness, and overall well-being in our toxin-free sanctuary.</li>
          </ul>
          <div className="location">
            <h3>Location: USA</h3>
            <p>
              The preferred Sedona properties offer intimate settings and private amenities making them perfect for a relaxing oasis. With hiking and biking trails accessible from artfully landscaped courtyards and leading into the Coconino National Forest, days of adventure and nights of peaceful relaxation around the evening campfire await.
              The preferred locations include but are not limited to The Red Agave, Los Abrigados, The Ridge, The Summit, as well as Luxury Sedona Vacation Rentals. Which location our group will stay at depends on the date, the size of the group, and the season. All of the preferred accommodations are in gorgeous locations and thoughtfully appointed in order to create an intimate atmosphere for groups.
            </p>
          </div>
          <div className="price">
            <h3>Price:</h3>
            <p style={{ fontSize: '20px' }}>Rs.5000/-</p>
            <h3>Instructor: Nancy</h3>
          </div>
          <Link to={"/register"}>
            <Button colorScheme="teal.600">Register</Button>
          </Link>   </div>

      </div>
    </div>
  );
}

export default Work6;

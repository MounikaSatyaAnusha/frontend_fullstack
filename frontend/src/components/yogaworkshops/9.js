import React, { useState } from 'react';
import './1.css'; // Import CSS file
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 
function Work9() {
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
          <img src="https://i.ibb.co/gF1npLz/IMG-20240814-053020.jpg" alt="Workshop 1" />
          <img src="https://i.ibb.co/nbfYd55/IMG-20240814-052932.jpg" alt="Workshop 2" />
          <img src="https://i.ibb.co/ZMMGxgx/meditation-beautiful-girl-meditating-nature-741910-8768.jpg" alt="Workshop 3" />
          <img src="https://i.ibb.co/jLpt9sk/med2.jpg" alt="Workshop 4" />
        </div>
        <div className="workshop-details" id="workshops">
          <h1>4 Day Yoga Holiday in the Heart of the French Alps</h1>
          <p>
            Sanskriti is a unique yoga center that is open all year long. You can choose which day of the week you want to come and for how long (most participants stay between 3 and 4 nights). During your stay, you can participate in daily yoga/meditation sessions; recharge your batteries in an inspiring, colorful place; feed your body and soul in a delicious cafe where everything is homemade and tastefully done; take time for yourself, enjoy the Zen garden and more. It is possible to arrive on Monday. Just know that the kitchen will be closed. You can bring your dinner and use the fully furnished shared kitchen; Sanskriti can also recommend a restaurant nearby for after the yoga class.
            Instructions will be offered in English and/or French.
          </p>
          <ul>
            <li>Holistic Wellness: Engage in personalized yoga and Ayurveda sessions tailored to all skill levels.</li>
            <li>Farm-to-Table Dining: Savor delicious, pesticide-free meals made from ingredients grown on our organic farm.</li>
            <li>Sustainable Living: Enjoy a serene environment powered entirely by solar energy, reflecting our commitment to sustainability.</li>
            <li>Natural Rejuvenation: Experience stress relief, better sleep, enhanced fitness, and overall well-being in our toxin-free sanctuary.</li>
          </ul>
          <div className="location">
            <h3>Location: Goa</h3>
            <p>
              Located in Scionzier, in the heart of the French Alps, 40 minutes from Geneva, easily accessible by flight or train. Sanskriti is a beautiful property that has recently been lovingly restored. The retreat center is located at the end of a quiet street and overlooks a beautiful forest and a beautiful river on one side and the majestic Alps on the other. It is a perfect place for a retreat center where you can meditate with the sound of the river, enjoy the Zen garden, or take long walks in the forest. During your free time, relax at the on-site cafe or stroll around the sleepy little town of Scionzier and try the local bakery full of sweet treats.
            </p>
          </div>
          <div className="price">
            <h3>Price:</h3>
            <p style={{ fontSize: '20px' }}>Rs.65,400/-</p>
            <h3>Instructor: Prachi Joshi</h3>
          </div>
          <Link to={"/register"}>
            <Button colorScheme="teal.600">Register</Button>
          </Link>   </div>

      
      </div>
    </div>
  );
}

export default Work9;

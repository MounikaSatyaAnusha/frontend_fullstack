import React, { useState } from "react";
import "./m1.css"; // Ensure this file exists and contains the necessary styles
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 

const Med10 = () => {
  const [isBookingFormVisible, setIsBookingFormVisible] = useState(false);

  const toggleMenu = () => {
    const menu = document.getElementById("menulists");
    if (menu) menu.classList.toggle("active");
  };

  const showBookingForm = () => {
    setIsBookingFormVisible(true);
    setTimeout(() => {
      const bookingForm = document.getElementById("bookingForm");
      if (bookingForm) bookingForm.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const confirmBooking = (event) => {
    event.preventDefault();
    window.open("success.html", "_blank");
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src="https://i.ibb.co/p48GmW7/IMG-20240814-052612.jpg" alt="Logo" />
        </div>
        <div className="navlinks">
          <span className="fas fa-bars" onClick={toggleMenu}></span>
          <ul id="menulists">
            <li><a href="/home" className="home">Home</a></li>
            <li><a href="/workshops">Yoga Workshops</a></li>
            <li><a href="/meditationworkshops">Meditation Workshops</a></li>
            <li><a href="/aboutus">About us</a></li>
            <li><a href="/">Log Out</a></li>
           
          </ul>
        </div>
      </header>

      <div className="content">
        <div className="image">
          <img src="https://i.ibb.co/hC5903K/yoga3.jpg" alt="Yoga Pose 1" />
          <img src="https://i.ibb.co/StMBDTm/yoga4.webp" alt="Yoga Pose 2" />
          <img src="https://i.ibb.co/1GVLRmj/yoga5.jpg" alt="Yoga Pose 3" />
          <img src="https://i.ibb.co/rx7VM1y/yoga6.jpg" alt="Yoga Pose 4" />
        </div>

        <div className="workshop-details" id="workshops">
          <h1>8 Day Good Vibrations Retreat on Sardinia with Private Boutique Room, Sea-view Pool and Spa</h1>
          <p>
            Dance, shake, sing, and breathe. You’ll dance and feel your bodies, open your hearts, and feel joy. You do breathwork, which can open you to a higher vibrational state of awareness and strengthen your life force. You’ll go on sound journeys and experience the healing power of your own voice and of the singing bowls, gongs, drums, and other instruments. You’ll practice active meditations, yoga, theatre, walk in nature, and sense the earth. Magical surroundings and facilities. You stay in a private boutique room with en-suite bathroom. Sea view pool, delicious vegetarian food, included spa, immersed in nature.
          </p>
          <ul>
            <li>Daily yoga and meditation adapted to the guests’ abilities and experience</li>
            <li>Personal development workshops based on the philosophy of Non-Violent Communication</li>
            <li>Hikes off the beaten track to known-by-locals-only spots</li>
          </ul>
          <br />
          <br />
          <div className="location">
            <h3>Location:</h3>
            <p>
              Soul Valley, SP17, 09040 Torre Delle Stelle (Cagliari), Sardinia, Italy
            </p>
          </div>
          <div className="price">
            <h3>Price:</h3>
            <p style={{ fontSize: "20px" }}>Rs.181,939/-</p>
          </div>
          <Link to={"/register"}>
            <Button colorScheme="teal.600">Register</Button>
          </Link>   </div>

      </div>
    </div>
  );
};

export default Med10;
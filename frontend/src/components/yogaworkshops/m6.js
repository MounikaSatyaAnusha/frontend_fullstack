import React, { useState } from "react";
import "./m1.css"; // Assuming you create a CSS file or import the necessary styles
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 

const Med6 = () => {
  const [isBookingFormVisible, setIsBookingFormVisible] = useState(false);

  const toggleMenu = () => {
    const menu = document.getElementById("menulists");
    menu.classList.toggle("active");
  };

  const showBookingForm = () => {
    setIsBookingFormVisible(true);
    setTimeout(() => {
      const bookingForm = document.getElementById("bookingForm");
      bookingForm.scrollIntoView({ behavior: "smooth" });
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
          <h1>7 Day Holistic Yoga and Meditation Retreat</h1>
          <p>Savour genuine Thai island culture through this unforgettable 4-day retreat. Located amongst an abundance of natural beauty, Island Yoga is the ideal environment for a transformative spiritual and personal experience. You will embark on a journey of conscious evolution, which is the aim of yoga and, ultimately, their mission at Island Yoga. They have created an environment where students can experience an authentic and fun yoga community while still having the opportunity to immerse deeply into your practices in perfect serenity.</p>
          <ul>
            <li>Daily yoga and meditation adapted to the guests’ abilities and experience</li>
            <li>Personal development workshops based on the philosophy of Non-Violent Communication</li>
            <li>Hikes off the beaten track to known-by-locals-only spots</li>
          </ul>
          <br />
          <div className="location">
            <h3>Location:</h3><br />
            <p>French Riviera - 15 kilometres
              Mediterranean cliffs ("Baou") - 5 minutes walk
              Nice - 30 minutes drive
              Nice Côte d’Azur Airport (NCE) - 15 kilometres</p>
          </div>
          <div className="price">
            <h3>Price:</h3><br />

            
            <p style={{ fontSize: "20px" }}>Rs.13,575/-</p>
          </div>
          <Link to={"/register"}>
            <Button colorScheme="teal.600">Register</Button>
          </Link>   </div>

      </div>
    </div>
  );
};

export default Med6;
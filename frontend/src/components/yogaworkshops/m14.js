import React, { useState } from "react";
import "./m1.css"; // Ensure this file exists and contains the necessary styles
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 

const Med14 = () => {
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
          <h1>3 Day Sound Healing, Meditation, and Multi-Style Yoga Retreat in Rishikesh</h1>
          <p>
            Imagine talking about life and spirituality with the authentic and experienced yogis while sitting on the top of the mountain with the sight of the majestic and beautiful Ganges. Doing yoga and meditation beside the Holy River Ganges. Escape your busy daily life for a completely serene yoga holiday in Rishikesh. Practice daily Hatha yoga, learn the traditional Indian philosophy, and meditation, and get a sense of emotional well-being in this 3-day affordable yoga retreat in Rishikesh.
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
            <p>Drishti Yoga School, Tapovan, Rishikesh, Uttarakhand, 249192, India</p>
          </div>
          <div className="price">
            <h3>Price:</h3>
            <p style={{ fontSize: "20px" }}>Rs.12,970/-</p>
          </div>

          <Link to={"/register"}>
            <Button colorScheme="teal.600">Register</Button>
          </Link>   </div>

      </div>
    </div>
  );
};

export default Med14;
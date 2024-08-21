import React, { useState } from "react";
import "./m1.css"; // Ensure this file exists and contains the necessary styles
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 

const Med4 = () => {
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
          <img src="https://i.ibb.co/wKQCNfV/653x490.jpg" alt="Yoga Pose 1" />
          <img src="https://i.ibb.co/Y7YX0Rj/653x490-1.jpg" alt="Yoga Pose 2" />
          <img src="https://i.ibb.co/fnxbQXJ/653x490-3.jpg" alt="Yoga Pose 3" />
          <img src="https://i.ibb.co/CvRn0Cx/653x490-4.jpg" alt="Yoga Pose 4" />
        </div>

        <div className="workshop-details" id="workshops">
          <h1>7 Day Holistic Yoga and Meditation Retreat</h1>
          <p>
            This retreat is a rare opportunity to live with local people and meet their friends in rural France.
            You will taste local produce, admire the beautiful landscape, get off the beaten track, and experience 
            French culture from the inside while adding more mindfulness to your daily life. Set in the beautiful 
            medieval village of Saint-Jeannet in the South of France, we are a stone's throw away from the French Riviera, 
            with breath-taking views of it from the house. All of the activities during the retreat are performed with the
            awareness of the present moment, in complete connectedness with the body and the breath. Instructions are offered in English and/or French.
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
              French Riviera - 15 kilometres<br />
              Mediterranean cliffs ("Baou") - 5 minutes walk<br />
              Nice - 30 minutes drive<br />
              Nice Côte d’Azur Airport (NCE) - 15 kilometres
            </p>
          </div>

          <div className="price">
            <h3>Price:</h3>
            <p style={{ fontSize: "20px" }}>Rs.13,575/-</p>
          </div>
          <Link to={"/register"}>
            <Button colorScheme="teal.600">Register</Button>
          </Link>   </div>

      </div>
    </div>
  );
};

export default Med4;
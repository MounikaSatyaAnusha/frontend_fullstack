import React, { useState } from "react";
import "./m1.css"; // Assuming you create a CSS file or import the necessary styles
import { Button } from '@chakra-ui/react'; // Import Button from Chakra UI
import { Link } from 'react-router-dom'; 

const Med2 = () => {
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
            <li><a href="meditationworkshops">Meditation Workshops</a></li>
            <li><a href="/aboutus">About us</a></li>
            <li><a href="/">Log Out</a></li>
            
          </ul>
        </div>
      </header>

      <div className="content">
        <div className="image">
          <img src="https://i.ibb.co/P4srLQJ/yoga9.jpg" alt="Yoga Pose 1" />
          <img src="https://i.ibb.co/Y7YX0Rj/653x490-1.jpg" alt="Yoga Pose 2" />
          <img src="https://i.ibb.co/bdwyLYp/yoga11.jpg" alt="Yoga Pose 3" />
          <img src="https://i.ibb.co/wKQCNfV/653x490.jpg" alt="Yoga Pose 4" />
        </div>

        <div className="workshop-details" id="workshops">
          <h1>Experience Yogic Life and Ayurvedic Cuisines in India</h1>
          <p>Discover serenity at Antharyamin, a luxurious eco-friendly resort nestled in the tranquil Sahyadri Mountains. Our retreat offers a holistic experience to recharge your body, mind, and soul. Here's what awaits you:</p>
          <ul>
            <li>Holistic Wellness: Engage in personalized yoga and Ayurveda sessions tailored to all skill levels.</li>
            <li>Farm-to-Table Dining: Savor delicious, pesticide-free meals made from ingredients grown on our organic farm.</li>
            <li>Sustainable Living: Enjoy a serene environment powered entirely by solar energy, reflecting our commitment to sustainability.</li>
            <li>Natural Rejuvenation: Experience stress relief, better sleep, enhanced fitness, and overall well-being in our toxin-free sanctuary.</li>
          </ul>
          <br />
          <br />
          <div className="location">
            <h3>Location:</h3>
            <p>
              Latitude: 8.6053° N<br />
              Longitude: 77.0685° E<br />
              Elevation: Approximately 300 meters above sea level<br />
              Nearest Airport: Trivandrum International Airport, 20 minutes away<br />
              Nearest Railway Station: Thiruvananthapuram Central Railway Station, approximately 30 minutes away<br />
              Nearest City: Thiruvananthapuram, about 15 km away
            </p>
          </div>
          <div className="price">
            <h3>Price:</h3>
            <p style={{ fontSize: "20px" }}>Rs.55,679/-</p>
          </div>
          <Link to={"/register"}>
            <Button colorScheme="teal.600">Register</Button>
          </Link>   </div>

      </div>
    </div>
  );
};

export default Med2;
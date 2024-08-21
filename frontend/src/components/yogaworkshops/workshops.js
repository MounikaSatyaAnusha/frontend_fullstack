import React from 'react';
import './workshop.css';


function Yoga() {
  // Function to handle details button click
  const handleDetails = (event, workshopNumber) => {
    event.preventDefault();
    window.open(`/workshop/${workshopNumber}`);
  };

  return (
    <div>
      <header>
        <div className="start">
          <div className="content flex_space">
           
            <div className="navlinks">
              <ul id="menulists">
                <li><a href="/home">Home</a></li>
                <li><a href="/workshops" className="yogaworkshops">Yoga Workshops</a></li>
                <li><a href="/meditationworkshops">Meditation Workshops</a></li>
                <li><a href="/aboutus">About us</a></li>
                <li><a href="/">Log Out</a></li>
              </ul>
              <span className="fa fa-bars"></span>
            </div>
          </div>
        </div>
      </header>
      <div className="heading">
        <h2>Yoga Workshops</h2>
      </div>
      <div className="boxes">
        <section className="workshops">
          {[
            { img: 'https://i.ibb.co/wYMfKD6/images-44.jpg', title: '20 Day Yoga and Ayurveda Retreat in Kerala', location: 'Kerala, India', days: '20' },
            { img: 'https://i.ibb.co/zGSxRq0/yoga4.jpg', title: '11 Day Yoga Retreat with Sam and Manav in Goa', location: 'Goa, India', days: '10' },
            { img: 'https://i.ibb.co/DWG41wM/yoga5.jpg', title: '28 Day Ayurvedic Panchkarma Treatment and Yoga Retreat', location: 'Rishikesh, India', days: '28' },
            { img: 'https://i.ibb.co/xzY2Y0y/yoga6.jpg', title: '8 Day Yoga and Meditation, Vegan Wellness Retreat', location: 'Koh Phangan, Thailand', days: '8' },
            { img: 'https://i.ibb.co/C0mGV5C/images-40.jpg', title: '3 Day Rural Yoga Retreat', location: 'Fonollosa, Catalonia, Spain', days: '3' },
            { img: 'https://i.ibb.co/VTL0S72/images-39.jpg', title: '4 Day Unwind and Rewild Women\'s Wellness Retreat', location: 'Sedona, Arizona, USA', days: '4' },
            { img: 'https://i.ibb.co/nDfbNDX/653x490.jpg', title: '7 Day Wellness Yoga Retreat', location: 'Ericeira, Portugal', days: '7' },
            { img: 'https://i.ibb.co/r67x1Yg/images-38.jpg', title: '15 Day Flexible Summer Retreat on Sardinia', location: 'Sardinia, Italy', days: '15' },
            { img: 'https://i.ibb.co/Fn5Np1L/images-37.jpg', title: '12 Day Yoga Holiday in the Heart of the French Alps', location: 'Scionzier, France', days: '12' },
            { img: 'https://i.ibb.co/McWdY1T/images-36.jpg', title: '25 Day Connect to Yourself Yoga Retreat', location: 'Kerkira, Greece', days: '25' },
            { img: 'https://i.ibb.co/3c6dMPc/images-31.jpg', title: '8 Day Active Yoga & Cultural Nature Retreat in Kandy', location: 'Kandy District, Sri Lanka', days: '8' },
            { img: 'https://i.ibb.co/p1544LS/images-32.jpg', title: '3 Day Weekend Women\'s Embody Meditation and Yoga Retreat', location: 'Moffat, Colorado, USA', days: '3' },
            { img: 'https://i.ibb.co/hR75XNH/images-33.jpg', title: '30 Day Heritage Yoga and Meditation Retreat', location: 'Bali, Sesandan, Indonesia', days: '30' },
            { img: 'https://i.ibb.co/vqDJgKm/images-34.jpg', title: '7 Day Elemental Yoga Retreat in Tulum', location: 'Tulum, Mexico', days: '7' },
            { img: 'https://i.ibb.co/XXYr6hY/images-35.jpg', title: '18 Day Self-Discovery Yoga and Meditation Retreat', location: 'Andhra Pradesh, India', days: '18' }
          ].map((workshop, index) => (
            <div className="workshop" key={index}>
              <img src={workshop.img} alt={workshop.title} />
              <div className="content">
                <h3>{workshop.title}</h3>
                <div className="details">Location: {workshop.location}</div>
                <div className="days">Days: {workshop.days} days</div>
                <button className="book-now" onClick={(e) => handleDetails(e, index + 1)}>Details</button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Yoga;


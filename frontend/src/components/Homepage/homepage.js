import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home = () => {
  const workshops = [
    {
      imgSrc: 'https://i.ibb.co/wYMfKD6/images-44.jpg',
      title: '20 Day Yoga and Ayurveda Retreat in Kerala',
      location: 'Kerala, India',
      days: '20 days',
      link: '/workshop1',
    },
    // Add more workshop objects here
    {
      imgSrc: 'https://i.ibb.co/zGSxRq0/yoga4.jpg',
      title: '11 Day Yoga Retreat with Sam and Manav in Goa',
      location: 'Goa, India',
      days: '11 days',
      link: '/workshop2',
    },
    {
      imgSrc: 'https://i.ibb.co/DWG41wM/yoga5.jpg',
      title: '28 Day Ayurvedic Panchkarma Treatment and Yoga Retreat',
      location: 'Rishikesh, India',
      days: '28 days',
      link: '/workshop3',
    },
    // Add the rest of your workshops similarly
  ];

  return (
    <Router>
      <header style={headerStyle}>
        <div style={startStyle}>
          <div style={flexSpaceStyle}>
            <div style={logoStyle}>
              <img src="https://i.ibb.co/p48GmW7/IMG-20240814-052612.jpg" alt="Logo" style={logoImgStyle} />
            </div>
            <div style={navlinksStyle}>
              <ul style={ulStyle}>
                <li style={liStyle}><Link to="#home" style={linkStyle}>Home</Link></li>
                <li style={liStyle}><Link to="#workshops" style={{ ...linkStyle, color: 'teal', fontWeight: '800' }}>Yoga Workshops</Link></li>
                <li style={liStyle}><Link to="#Meditation Workshops" style={linkStyle}>Meditation Workshops</Link></li>
                <li style={liStyle}><Link to="#Aboutus" style={linkStyle}>About us</Link></li>
                <li style={liStyle}><button style={buttonStyle} className="signin"><Link to="/" style={buttonLinkStyle}>SIGNIN</Link></button></li>
                <li style={liStyle}><button style={buttonStyle} className="signup"><Link to="/" style={buttonLinkStyle}>SIGNUP</Link></button></li>
              </ul>
              <span style={menuIconStyle} className="fa fa-bars"></span>
            </div>
          </div>
        </div>
      </header>
      <div style={headingStyle}>
        <h2>Yoga Workshops</h2>
      </div>
      <div style={boxesStyle}>
        <Routes>
          <Route path="/" element={<WorkshopList workshops={workshops} />} />
          <Route path="/workshop1" element={<div>Details for Workshop 1</div>} />
          <Route path="/workshop2" element={<div>Details for Workshop 2</div>} />
          <Route path="/workshop3" element={<div>Details for Workshop 3</div>} />
          {/* Add additional routes for other workshops */}
        </Routes>
      </div>
    </Router>
  );
}

const WorkshopList = ({ workshops }) => (
  <section style={workshopsStyle}>
    {workshops.map((workshop, index) => (
      <div style={workshopStyle} key={index}>
        <img src={workshop.imgSrc} alt={workshop.title} style={workshopImgStyle} />
        <div style={contentStyle}>
          <h3>{workshop.title}</h3>
          <div style={detailsStyle}>Location: {workshop.location}</div>
          <div style={daysStyle}>Days: {workshop.days}</div>
          <button style={bookNowButtonStyle} onClick={() => window.location.href = workshop.link}>Details</button>
        </div>
      </div>
    ))}
  </section>
);

// Styles
const headerStyle = {
  height: '10vh',
  lineHeight: '10vh',
  padding: '0 20px',
  backgroundColor: '#004d40',
  color: 'white',
};

const startStyle = {
  position: 'fixed',
  top: '0',
  width: '100%',
  height: '11%',
  backgroundColor: 'white',
  color: 'white',
  padding: '10px 0',
  zIndex: 1000,
  paddingRight: '20px',
};

const flexSpaceStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

const logoStyle = {
  marginLeft: '20px',
};

const logoImgStyle = {
  height: '50px',
};

const navlinksStyle = {
  display: 'flex',
};

const ulStyle = {
  listStyle: 'none',
  padding: '0',
  margin: '0',
  display: 'flex',
  gap: '20px',
};

const liStyle = {
  display: 'inline',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '1em',
  transition: 'color 0.3s',
};

const buttonStyle = {
  border: '1px solid teal',
  padding: '5px',
  borderRadius: '7px',
  backgroundColor: 'rgb(89, 192, 192)',
  color: 'white',
};

const buttonLinkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const menuIconStyle = {
  color: 'white',
  margin: '0 20px',
};

const headingStyle = {
  color: 'white',
  backgroundColor: 'teal',
  width: 'auto',
  height: '100px',
  marginTop: '10px',
  fontSize: '37px',
  paddingTop: '10px',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const boxesStyle = {
  marginTop: '10px',
};

const workshopsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  padding: '30px 20px',
  gridColumnGap: '20px',
  gridRowGap: '30px',
};

const workshopStyle = {
  border: 'solid teal 1px',
};

const workshopImgStyle = {
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  cursor: 'pointer',
  transition: '0.2s ease',
};

const contentStyle = {
  fontSize: '10px',
  padding: '5px',
  textAlign: 'center',
};

const detailsStyle = {
  marginBottom: '5px',
};

const daysStyle = {
  marginBottom: '10px',
};

const bookNowButtonStyle = {
  padding: '5px 30px',
  border: 'none',
  outline: 'none',
  backgroundColor: 'teal',
  color: 'white',
  cursor: 'pointer',
  borderRadius: '4px',
  fontSize: '20px',
  display: 'block',
  margin: '0 auto',
  transition: '0.2s all',
};

export default Home;

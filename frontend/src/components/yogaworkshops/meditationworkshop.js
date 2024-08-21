import React from 'react';
import './meditationworkshop.css'; 

const Meditationworkshops = () => {
  const openBookingPage = (page) => {
    window.open(page, '_blank');
  };

  return (
    <div>
      <header>
        <div className="start">
         
          <div className="navlinks">
            <ul id="menulists">
              <li><a href="/home">Home</a></li>
              <li><a href="/workshops" className="yogaworkshop">Yoga Workshops</a></li>
              <li><a href="/meditationworkshops" style={{ color: 'teal', fontWeight: '800' }}>Meditation Workshops</a></li>
              <li><a href="/aboutus">About us</a></li>
              <li><a href="/">Log Out</a></li>
            </ul>
          </div>
        </div>
      </header>
      <div className="heading">
        <h2 style={{ fontFamily: 'serif', color: 'white',marginBottom:'10px'}}>Meditation Workshops</h2>
      </div>
      <section className="workshops">
        <div className="workshop">
          <img src="https://i.ibb.co/drQTHFC/yoga10.webp" alt="Retreat 1" style={{ height: '300px', width: '350px' }} />
          <div className="content">
            <h3>8 Day Goddess Journey of Yin and Restorative Yoga Retreat with Meditation</h3>
            <div className="details">Location: Rishikesh, India.</div>
            <div className="days">4 days &#183; 3 nights</div>
            <button onClick={() => openBookingPage('/m1')} className="book-now">Details</button>
          </div>
        </div>
        <div className="workshop">
          <img src="https://i.ibb.co/wsw21F8/653x490.webp" alt="Retreat 2" style={{ height: '300px', width: '350px' }} />
          <div className="content">
            <h3>7 Day Level 1,2 Sound Healing Training in Arambol, Goa</h3>
            <div className="details">Location: Goa, India</div>
            <div className="days">7 days</div>
            <button onClick={() => openBookingPage('/m2')} className="book-now">Details</button>
          </div>
        </div>
        <div className="workshop">
          <img src="https://i.ibb.co/ZVrhtm9/653x490-2.jpg" alt="Retreat 3" style={{ height: '300px', width: '350px' }} />
          <div className="content">
            <h3>4 Day Insight Yoga and meditation holiday in Hoi An</h3>
            <div className="details">Location: Le Thanh Tong, Hoi An, Vietnam</div>
            <div className="days">4 days</div>
            <button onClick={() => openBookingPage('/m3')} className="book-now">Details</button>
          </div>
        </div>
        <div className="workshop">
          <img src="https://i.ibb.co/8Bwmvmx/med4.jpg" alt="Retreat 4" style={{ height: '300px', width: '350px' }} />
          <div className="content">
            <h3>14 Day Ayurveda, Yoga, Meditation and Emotional Healing Retreat in Rishikesh</h3>
            <div className="details">Location: Rishikesh, India</div>
            <div className="days">14 days</div>
            <button onClick={() => openBookingPage('/m4')} className="book-now">Details</button>
          </div>
        </div>
        <div className="workshop">
          <img src="https://i.ibb.co/Btbr5dY/653x490-8.jpg" alt="Retreat 5" style={{ height: '300px', width: '350px' }} />
          <div className="content">
            <h3>4 Day Yoga and Meditation Vacation in Phang Nga</h3>
            <div className="details">Location: Goa, India</div>
            <div className="days">7 days</div>
            <button onClick={() => openBookingPage('/m5')} className="book-now">Details</button>
          </div>
        </div>
        <div className="workshop">
          <img src="https://i.ibb.co/27sQRZx/med7.webp" alt="Retreat 6" style={{ height: '300px', width: '350px' }} />
          <div className="content">
            <h3>7 Day Yoga Nidra (Relaxation) and Meditation Retreat in Rishikesh</h3>
            <div className="details">Location: Island Yoga, Kohyao Phang Nga, Thailand</div>
            <div className="days">4 days</div>
            <button onClick={() => openBookingPage('/m6')} className="book-now">Details</button>
          </div>
        </div>
        <div className="workshop">
          <img src="https://i.ibb.co/nDfbNDX/653x490.jpg" alt="Retreat 7" style={{ height: '300px', width: '350px' }} />
          <div className="content">
            <h3>6 Day Luxury Yoga retreat and meditation</h3>
            <div className="details">Location: Solar Alvura Health Hotel, Pés do Cerro, 223m 8700-124, Moncarapacho, Olhão Algarve, Portugal</div>
            <div className="days">2 days</div>
            <button onClick={() => openBookingPage('/m7')} className="book-now">Details</button>
          </div>
        </div>
        <div className="workshop">
          <img src="https://i.ibb.co/r67x1Yg/images-38.jpg" alt="Retreat 8" style={{ height: '300px', width: '350px' }} />
          <div className="content">
            <h3>15 Day Flexible Summer Retreat on Sardinia</h3>
            <div className="details">Location: Sardinia, Italy, Good Food, and Local Wine</div>
            <div className="days">15 days</div>
            <button onClick={() => openBookingPage('/m8')} className="book-now">Details</button>
          </div>
        </div>
        <div className="workshop">
          <img src="https://i.ibb.co/hC5903K/yoga3.jpg" alt="Retreat 9" style={{ height: '300px', width: '350px' }} />
          <div className="content">
            <h3>3 Day Sound Healing, Meditation, and Multi-Style Yoga Retreat in Rishikesh</h3>
            <div className="details">Location: Drishti Yoga School, Tapovan, Rishikesh, Uttarakhand, 249192, India</div>
            <div className="days">3 days</div>
            <button onClick={() => openBookingPage('/m9')} className="book-now">Details</button>
          </div>
        </div>
        <div className="workshop">
          <img src="https://i.ibb.co/bdwyLYp/yoga11.jpg" alt="Retreat 10" style={{ height: '300px', width: '350px' }} />
          <div className="content">
            <h3>8 Day Good Vibrations Retreat on Sardinia with Private Boutique Room, Sea-view Pool and Spa</h3>
            <div className="details">Location: Soul Valley, SP17, 09040 Torre Delle Stelle (Cagliari), Sardinia, Italy</div>
            <div className="days">8 days</div>
            <button onClick={() => openBookingPage('/m10')} className="book-now">Details</button>
          </div>
        </div>
        <div className="workshop">
          <img src="https://i.ibb.co/rx7VM1y/yoga6.jpg" alt="Retreat 11" style={{ height: '300px', width: '350px' }} />
          <div className="content">
            <h3>5 Day Self-Connection Retreat for Inner Harmony in Arambol, Goa</h3>
            <div className="details">Location: Svabodha Wellness, Temple road, Arambol, Pernem, North Goa, Goa, India</div>
            <div className="days">5 days</div>
            <button onClick={() => openBookingPage('/m11')} className="book-now">Details</button>
          </div>
        </div>
        <div className="workshop">
          <img src="https://i.ibb.co/wzjrPnH/yoga15.jpg" alt="Retreat 12" style={{ height: '300px', width: '350px' }} />
          <div className="content">
            <h3>3 Day Weekend Women's Embody Meditation and Yoga Retreat</h3>
            <div className="details">Location: Moffat, Colorado, USA</div>
            <div className="days">3 days</div>
            <button onClick={() => openBookingPage('/m12')} className="book-now">Details</button>
          </div>
        </div>
        <div className="workshop">
          <img src="https://i.ibb.co/wKQCNfV/653x490.jpg" alt="Retreat 13" style={{ height: '300px', width: '350px' }} />
          <div className="content">
            <h3>30 Day Heritage Yoga and Meditation Retreat</h3>
            <div className="details">Location: Bali, Sesandan, Indonesia</div>
            <div className="days">30 days</div>
            <button onClick={() => openBookingPage('/m13')} className="book-now">Details</button>
          </div>
        </div>
        <div className="workshop">
          <img src="https://i.ibb.co/1GVLRmj/yoga5.jpg" alt="Retreat 14" style={{ height: '300px', width: '350px' }} />
          <div className="content">
            <h3>7 Day Elemental Yoga Retreat in Tulum</h3>
            <div className="details">Location: Tulum, Mexico</div>
            <div className="days">7 days</div>
            <button onClick={() => openBookingPage('/m14')} className="book-now">Details</button>
          </div>
        </div>
        <div className="workshop">
          <img src="https://i.ibb.co/x6GrsGz/yoga8.jpg" alt="Retreat 15" style={{ height: '300px', width: '350px' }} />
          <div className="content">
            <h3>4 Day Chakra Bliss Yoga Retreat with Hike to Waterfalls, Good Food, and Local Wine</h3>
            <div className="details">Location: Barcelona</div>
            <div className="days">4 days</div>
            <button onClick={() => openBookingPage('/m15')} className="book-now">Details</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Meditationworkshops;
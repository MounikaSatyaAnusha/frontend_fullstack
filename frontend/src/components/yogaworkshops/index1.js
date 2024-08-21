import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Yoga from './workshops.js';
// import Workshop1 from './Workshop1'; // Example component
// import Workshop2 from './Workshop2'; // Example component
import Work1 from './1';

// const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Yoga />} />
      <Route path="/1" element={<Work1 />} />
      {/* <Route path="/2" element={<Work2 />} /> */}
      {/* Add more routes as needed */}
    </Routes>
  </Router>
);

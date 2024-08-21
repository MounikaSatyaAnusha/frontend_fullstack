import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Yoga from './Yoga';
// import './1.js'; // Example component
// import './2.js'; // Example component
// import Work1 from './components/yogaworkshops/1.js';
// // import Yogaworkshop from './components/yogaworkshops/yogaworkshops';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>

 );
 reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// import React from 'react';
// import ReactDOM from 'react-dom/client';


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<Yoga />} />
//       <Route path="/1" element={<Work1/>} />
//       {/* <Route path="/2" element={<Work2 />} /> */}
//       {/* Add more routes as needed */}
//     </Routes>
//   </Router>
// );


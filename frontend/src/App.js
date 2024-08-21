import './App.css';
import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { Post } from './components/register/post';
import { AdminSignIn } from './components/signin/adminsignin';
import { Register } from './components/yogaworkshops/register'; 
import {YogaRetreats} from'./components/yogaworkshops/landing';
import {LandingYogaRetreats} from './components/yogaworkshops/homepage1';
import Yoga from './components/yogaworkshops/workshops';
import Work1 from './components/yogaworkshops/1';
import Work2 from './components/yogaworkshops/2';
import Work3 from './components/yogaworkshops/3';
import Work4 from './components/yogaworkshops/4';
import Work5 from './components/yogaworkshops/5';
import Work6 from './components/yogaworkshops/6';
import Work7 from './components/yogaworkshops/7';
import Work8 from './components/yogaworkshops/8';
import Work9 from './components/yogaworkshops/9';
import Work10 from './components/yogaworkshops/10';
import Work11 from './components/yogaworkshops/11';
import Work12 from './components/yogaworkshops/12';
import Work13 from './components/yogaworkshops/13';
import Work14 from './components/yogaworkshops/14';
import Work15 from './components/yogaworkshops/15';
import Med1 from './components/yogaworkshops/m1';
import Med2 from './components/yogaworkshops/m2';
import Med3 from './components/yogaworkshops/m3';
import Med4 from './components/yogaworkshops/m4';
import Med5 from './components/yogaworkshops/m5';
import Med6 from './components/yogaworkshops/m6';
import Med7 from './components/yogaworkshops/m7';
import Med8 from './components/yogaworkshops/m8';
import Med9 from './components/yogaworkshops/m9';
import Med10 from './components/yogaworkshops/m10';
import Med11 from './components/yogaworkshops/m11';
import Med12 from './components/yogaworkshops/m12';
import Med13 from './components/yogaworkshops/m13';
import Med14 from './components/yogaworkshops/m14';
import Med15 from './components/yogaworkshops/m15';
import AboutUs from './components/yogaworkshops/about';
import Meditationworkshops from './components/yogaworkshops/meditationworkshop';



// import { Header } from './components/yogaworkshops/workshops';

function App() {
  const verify = sessionStorage.auth && JSON.parse(sessionStorage?.auth)?.email;
  console.log(verify);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/adminsignin' element={<AdminSignIn />} />
          <Route path='/signin' element={<SignIn />} /> 
  
          <Route path='/signup' element={<SignUp />} /> 
          {/* <Route path='/updatepassword' element={<Uppass />} /> Ensure this matches '/updatepassword' */}
         {/* <Route path='/post' element={<Post/>} /> */}
          <Route path='/' element={<YogaRetreats/>}/>
          <Route path='/home' element={<LandingYogaRetreats/>}/>
          <Route path='/workshops' element={<Yoga/>}/>
          <Route path='/workshop/1' element={<Work1/>}/>
          <Route path='/workshop/2' element={<Work2/>}/>
          <Route path='/workshop/3' element={<Work3/>}/>
          <Route path='/workshop/4' element={<Work4/>}/>
          <Route path='/workshop/5' element={<Work5/>}/>
          <Route path='/workshop/6' element={<Work6/>}/>
          <Route path='/workshop/7' element={<Work7/>}/>
          <Route path='/workshop/8' element={<Work8/>}/>
          <Route path='/workshop/9' element={<Work9/>}/>
          <Route path='/workshop/10' element={<Work10/>}/>
          <Route path='/workshop/11' element={<Work11/>}/>
          <Route path='/workshop/12' element={<Work12/>}/>
          <Route path='/workshop/13' element={<Work13/>}/>
          <Route path='/workshop/14' element={<Work14/>}/>
          <Route path='/workshop/15' element={<Work15/>}/>
          <Route path='/m1' element={<Med1/>}/>
          <Route path='/m2' element={<Med2/>}/>
          <Route path='/m3' element={<Med3/>}/>
          <Route path='/m4' element={<Med4/>}/>
          <Route path='/m5' element={<Med5/>}/>
          <Route path='/m6' element={<Med6/>}/>
          <Route path='/m7' element={<Med7/>}/>
          <Route path='/m8' element={<Med8/>}/>
          <Route path='/m9' element={<Med9/>}/>
          <Route path='/m10' element={<Med10/>}/>
          <Route path='/m11' element={<Med11/>}/>
          <Route path='/m12' element={<Med12/>}/>
          <Route path='/m13' element={<Med13/>}/>
          <Route path='/m14' element={<Med14/>}/>
          <Route path='/m15' element={<Med15/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/meditationworkshops' element={<Meditationworkshops/>}/>

        </Routes>
      </BrowserRouter>

   
    </>
  );
}

export default App;
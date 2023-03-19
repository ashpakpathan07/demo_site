// import logo from './logo.svg';
// import './App.css';

import { Hero } from "./compo/Hero";
import { Navbar } from "./compo/Navbar";
// import { About } from "./compo/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { About } from "./compo/About";
import { Services } from "./compo/Services";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>

<Route path="/" element={<Navbar/>}/>
<Route path="About-Us" element={<About/>}/>
<Route path="Services" element={<Services/>}/>


</Routes>

      </Router>

    

      <Hero/>
    </div>
  );
}

export default App;
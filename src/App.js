// import logo from './logo.svg';
// import './App.css';

import { Hero } from "./compo/Hero";
import { Navbar } from "./compo/Navbar";
// import { About } from "./compo/About";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { About } from "./compo/About";
import { Services } from "./compo/Services";

function App() {
  return (
    <div className="App">

<BrowserRouter>
      <Routes>
          <Route path="/"  element={<Navbar />} >
          <Route path="/Home" index element={<Hero />} ></Route>
          <Route path="About-Us"  element={<About />} />
          <Route path="Services"  element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="About-Us" element={<About />} />
          <Route path="Services" element={<Services />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;

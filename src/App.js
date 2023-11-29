import './App.css';
import Home from './pagees/Home' ;
import Blog from './pagees/Blog' ;
import OurMission from './pagees/OurMission' ;
import Contact from './pagees/Contact' ;
import Portfolio from './pagees/Portfolio' ;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">

    

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ourmission" element={<OurMission />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
         
          
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;

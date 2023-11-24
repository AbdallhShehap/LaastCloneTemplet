import './App.css';
import Home from './pagees/Home' ;
import Blog from './pagees/Blog' ;
import OurMission from './pagees/OurMission' ;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">

    

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ourmission" element={<OurMission />} />
         
          
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;

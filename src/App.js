import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Home from './pagees/Home' ;
import Blog from './pagees/Blog' ;
import OurMission from './pagees/OurMission' ;
import Contact from './pagees/Contact' ;
import Portfolio from './pagees/Portfolio' ;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  const [pages, setPages] = useState([]);

  useEffect(() => {



    const fetchFixdContent = async () => {
      try {
        const response = await axios.get('http://localhost:1010/pages/pages');
        console.log({pages:response.data})
        setPages(response.data);
      } catch (error) {
        console.error('Error fetching main content:', error);
      }
    };


    fetchFixdContent()


  }, []);

  const getComponent = (namePage) => {
    try {
      return React.createElement(require(`./pages/${namePage.trim()}`).default);
    } catch (error) {
      console.error(`Module not found: ${namePage}`);
      return null; // or return a default component
    }
  };

  return (
    <div className="App">

    

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ourmission" element={<OurMission />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {pages.map(page => (
            <Route key={page.id} path={page.path} element={getComponent(page.namePage)} />
          ))}
          
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;

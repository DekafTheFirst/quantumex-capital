import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import ScrollToTop from './components/ScrollToTop';
import Give from './components/Give';
import Company from './components/Company';
import Projects from './components/Projects';
import { useEffect, useState } from 'react';
import Services from './Pages/Services/Services';
import Navbar from './components/Navbar/Navbar';


function App() {
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
    // Listen for scroll events
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > 40) { // Change 100 to the desired scroll position
        // Update the state to indicate that the user has scrolled
        setScrolled(true);
      } else {
        // Update the state to indicate that the user hasn't scrolled
        setScrolled(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='app'>
      <HashRouter>
        <Navbar scrolled={scrolled}/>
        {/* <ScrollToTop /> */}
        <div id="content">
          <Routes>
            <Route path="/" element={<Home scrolled={scrolled}/>} />
            <Route path="/company" element={<Company />} />
            <Route path="/services/:slug" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/give" element={<Give />} />

            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;

import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import Services from './components/Services';
import ScrollToTop from './components/ScrollToTop';
import Give from './components/Give';
import Company from './components/Company';
import Projects from './components/Projects';


function App() {


  return (
    <div className='app'>
    <HashRouter>
      <Navbar  />
      <ScrollToTop />
      <div id="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/company" element={<Company/>}/>
            <Route path="/services" element={<Services/>}/>     
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/give" element={<Give />}/>

            <Route path="*" element={<NoPage />} />
          </Routes>  
      </div>
      <Footer />
    </HashRouter>
    </div>
  );
}

export default App;

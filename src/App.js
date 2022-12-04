
import React from 'react';
import './App.css';

import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Projects/>
      <ContactForm/>
     
      <Footer/>
     
     

    </div>
  );
}

export default App;

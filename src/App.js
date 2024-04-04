import React from 'react';
import './App.css';
import About from './Componets/Portfolio/About/About';
import Contact from './Componets/Portfolio/Contact/Contact';
import Footer from './Componets/Portfolio/Footer/Footer';
import Home from './Componets/Portfolio/Home/Home';
import Nav from './Componets/Portfolio/Nav/Nav';
import Project from './Componets/Portfolio/Project/Project';
import Services from './Componets/Portfolio/Servis/Services';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Services/> 
       <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

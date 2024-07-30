import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

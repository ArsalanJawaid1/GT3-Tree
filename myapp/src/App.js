import './App.css';
import React from 'react';
import Navbar from "./Components/navbar/Navbar"
import Header from "./Container/header/Header"
import Brand from './Components/brand/Brand';
import WhatGPT3 from "./Container/whatGPT3/WhatGPT3"
import Features from './Container/features/Features';
import Possibility from "./Container/possibility/Possibility"
import Cta from './Components/cta/Cta';
import Blog from './Container/blog/Blog';
import Footer from './Container/footer/Footer';
function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

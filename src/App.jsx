import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Box from './components/Box'
import Collections from './components/Collections';
import Trends from './components/Trends';
import Designers from './components/Designers';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Hero />
      <Box />
      <Collections />
      <Trends />
      <Designers />
      <Contact />
    </div>
  );
}

export default App;

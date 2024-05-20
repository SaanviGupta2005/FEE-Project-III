import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Box from './components/Box'
import Collection1 from './components/Collection1';
import Collection2 from './components/Collection2';
import Collection3 from './components/Collection3';
import LoadMore from './components/LoadMore';
import Trends from './components/Trends';
import Designers from './components/Designers';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Hero />
      <Box />
      <Collection1 />
      <Collection2 />
      <Collection3 />
      <LoadMore />
      <Trends />
      <Designers />
      <Contact />
    </div>
  );
}

export default App;

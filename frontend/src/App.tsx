import React from 'react';
import './App.css';
import { HeroSection } from './components/HeroSection/HeroSection';
import { Characteristics } from './components/Characteristics/Characteristics';
import { Learning } from './components/Learning/Learning';


function App() {
  return (
    <div className="App">
      <HeroSection />
      <Characteristics />
      <Learning />
    </div>
  );
}

export default App;

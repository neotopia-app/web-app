import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Hero />
      <Features />
      <CTA />
    </div>
  );
}

export default App;

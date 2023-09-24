import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Values from './components/Values';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Values />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;

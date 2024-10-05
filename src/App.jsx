import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './styles.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <AboutMe />
        <Projects />
        <Skills />
      </div>
      <footer> {new Date().getFullYear()} Shree Ram. </footer>
    </>
  );
};

export default App;

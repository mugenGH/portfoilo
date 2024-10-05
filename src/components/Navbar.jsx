import React, { useState, useEffect } from 'react';
import '../styles.css';

const Navbar = () => {
  const [shrink, setShrink] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${shrink ? 'shrink' : ''}`}>
      <a href="#about">About Me</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
    </div>
  );
};

export default Navbar;

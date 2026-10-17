import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Building the Future with Code</h1>
        <p>We deliver innovative software solutions to help your business grow and thrive in the digital age.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;

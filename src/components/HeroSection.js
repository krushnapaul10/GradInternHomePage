import React from 'react';
import './HeroSection.css';
import illustration from '../assets/illustration.png';
import logo from '../assets/logo.png';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">
        <img
          src={illustration}
          alt="team illustration"
          className="illustration"
        />
      </div>
      <div className="hero-right">
        <h1 className="welcome">Welcome to</h1>
        <img src={logo} alt="G adIntern logo" className="logo" />
        <button className="explore-btn">Explore</button>
      </div>
    </section>
  );
}

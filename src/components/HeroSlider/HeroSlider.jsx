// src/components/HeroSlider.jsx
import React, { useState } from 'react';
import binRoye from "../../assets/bin-roye.jpg";
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    title: 'Bin Roye',
    streams: '25B+ Streams',
    desc: 'Saba, a hopeless romantic deeply in love with her cousin Irtaza, faces heartbreak and fate when he loves someone else.',
    image: binRoye,
  },
  {
    id: 2,
    title: 'Peaky Blinders',
    streams: '28B+ Streams',
    desc: 'Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham...',
    image: binRoye,
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-slider">
      <div
        className="background"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      ></div>

      <div className="overlay" />

      <div className="hero-content">
        <h1>{slides[currentSlide].title}</h1>
        <p className="streams"><span>{slides[currentSlide].streams}</span> Streams</p>
        <p className="desc">{slides[currentSlide].desc}</p>

        <div className="hero-buttons">
          <button className="watch-now">Watch Now</button>
          <button className="watch-trailer">Watch Trailer</button>
        </div>
        <div className="slider-controls">
          <button onClick={prevSlide} className="arrow">&#8592;</button>
          <div className="dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === currentSlide ? 'active' : ''}`}
              ></span>
            ))}
          </div>
          <button onClick={nextSlide} className="arrow">&#8594;</button>
        </div>
      </div>
    </div>
  );
}

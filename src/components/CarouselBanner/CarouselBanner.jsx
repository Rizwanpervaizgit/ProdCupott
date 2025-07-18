import React, { useState } from 'react';
import './CarouselBanner.css';
import bck from '../../assets/images/bck.png';

const CarouselBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1));
  };

  return (
    <section className="carousel-banner">
      {/* Slide content container */}
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Slide 1 */}
        <div className="carousel-slide">
          <img src={bck} alt="Slide 1" className="carousel-bg" />
        

          <div className="carousel-content">
            <h2>The Best Streaming Experience</h2>
            <p>
             CUP Entertainment is the best streaming experience for watching your favorite movies and shows on demand anytime, anywhere. With CUP Entertainment, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch. </p>
            <button className="carousel-button">Start Watching Now</button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-slide">
          <img src={bck} alt="Slide 2" className="carousel-bg" />
        
          <div className="carousel-content">
            <h2>Explore Our Wide Variety<br/>of Categories</h2>
            <p>
              Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new, CUP Entertainment has something for everyone. Dive into our diverse collection and discover your next favorite.  </p>
            <div className="carousel-tags">
              <span>Movies</span>
              <span>Drama</span>
              <span>Live TV</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide buttons */}
      <div className="carousel-controls">
        <button onClick={handlePrev}>
          <i className="fas fa-arrow-left" />
        </button>
        <button onClick={handleNext}>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  );
};

export default CarouselBanner;

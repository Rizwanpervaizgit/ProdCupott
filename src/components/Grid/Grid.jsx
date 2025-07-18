import React, { useEffect, useRef, useState } from 'react';
import './Grid.css';
import binRoye from '../../assets/bin-roye.jpg';

const loadImages = (count) =>
  Array.from({ length: count }, (_, i) => ({
    src: binRoye,
    alt: `Movie Poster ${i + 1}`,
    fallback: 'https://placehold.co/300x300/333333/FFFFFF?text=No+Image',
  }));

const MovieSection = ({ category, images }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = current.offsetWidth * 0.9; // Scroll by 90% of container width

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <section className="movie-section">
      <div className="category-header">
        <p className="category-label">{category}</p>
        <div className="scroll-buttons">
          <button onClick={() => scroll('left')}>&#8249;</button>
          <button onClick={() => scroll('right')}>&#8250;</button>
        </div>
      </div>
      <div className="movie-grid" ref={scrollRef}>
        {images.map((img, idx) => (
          <div className="movie-item" key={idx}>
            <img
              src={img.src}
              alt={img.alt}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = img.fallback;
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const Grid = () => {
  const [category, setCategory] = useState([]);
  const [trending, setTrending] = useState([]);
  const [top, setTop] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    setCategory(loadImages(12));
    setTrending(loadImages(10));
    setTop(loadImages(6));
    setNewReleases(loadImages(8));
  }, []);

  return (
    <div className="movie-container">
      <MovieSection category="Categories" images={category} />
      <MovieSection category="Trending" images={trending} />
      <MovieSection category="Top 10 in Last Month" images={top} />
      <MovieSection category="New Releases" images={newReleases} />
    </div>
  );
};

export default Grid;

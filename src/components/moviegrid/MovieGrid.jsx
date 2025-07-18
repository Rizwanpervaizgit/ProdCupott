import React, { useEffect, useState } from 'react';
import './MovieGrid.css'; // Link to your CSS file
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';
import img7 from '../../assets/images/img7.jpg';
import img8 from '../../assets/images/img8.jpg';
import img9 from '../../assets/images/img9.jpg';
import img10 from '../../assets/images/img10.jpg';
import img11 from '../../assets/images/img11.jpg';
import img12 from '../../assets/images/img12.jpg';
import img13 from '../../assets/images/img13.jpg';
import img14 from '../../assets/images/img14.jpg';
import img15 from '../../assets/images/img15.jpg';
import img16 from '../../assets/images/img16.jpg';
import img17 from '../../assets/images/img17.jpg';
import img18 from '../../assets/images/img18.jpg';
import img19 from '../../assets/images/img19.jpg';
import img20 from '../../assets/images/img20.jpg';
import img21 from '../../assets/images/img21.jpg';
import img22 from '../../assets/images/img22.jpg';
import img23 from '../../assets/images/img23.jpg';
import img24 from '../../assets/images/img24.jpg';
import img25 from '../../assets/images/img25.jpg';
import img26 from '../../assets/images/img26.jpg';
import img27 from '../../assets/images/img27.jpg';
import img28 from '../../assets/images/img28.jpg';
import img29 from '../../assets/images/img29.jpg';
import img30 from '../../assets/images/img30.jpg';

const allImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30
];
const loadImages = (start, count) => {
  const images = [];
  for (let i = start - 1; i < start - 1 + count; i++) {
    images.push({
      src: allImages[i],
      alt: `Movie Poster ${i + 1}`,
      fallback: `https://placehold.co/300x300/333333/FFFFFF?text=No+Image`
    });
  }
  return images;
};


const MovieSection = ({ title, images, isSquare = false }) => (
  <section>
    <h2 className="section-title">{title}</h2>
    <div className="movie-grid">
      {images.map((img, idx) => (
        <div
          className={`movie-item ${isSquare ? 'square-container' : ''}`}
          key={idx}
        >
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

const MovieGrid = () => {
  const [trending, setTrending] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [liveTV, setLiveTV] = useState([]);

  useEffect(() => {
    setTrending(loadImages(1, 12));
    setNewReleases(loadImages(13, 10));
    setLiveTV(loadImages(25, 6));
  }, []);

  return (
    <div className="movie-container">
      <MovieSection title="Trending Now" images={trending} />
      <MovieSection title="New Releases" images={newReleases} />
      <MovieSection title="Live TV" images={liveTV} isSquare />
    </div>
  );
};

export default MovieGrid;

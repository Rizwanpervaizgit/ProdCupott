import React from 'react';
import './CategoriesSection.css'; // Custom CSS (see below)

const CategoriesSection = () => {
  return (
    <section className="categories-section">
      <h3 className="section-heading">Explore Our Categories</h3>
      <div className="categories-container">
        <span className="category-pill">Movies</span>
        <span className="category-pill">Drama</span>
        <span className="category-pill">Live TV</span>
      </div>
    </section>
  );
};

export default CategoriesSection;

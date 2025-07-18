import React from 'react';
import './OttHighlights.css'; // Make sure this CSS is linked

const OttHighlights = () => {
  return (
    <section className="ott-section section-padding">
      <h3>OTT Highlights</h3>
      <div className="ott-grid">
        <div className="ott-card">
          <h4>Exclusive Content</h4>
          <p>
            Access to a unique collection of films and series you won't find anywhere else.
          </p>
        </div>
        <div className="ott-card">
          <h4>4K Ultra HD Streaming</h4>
          <p>
            Experience breathtaking visuals with our crystal-clear 4K streaming quality.
          </p>
        </div>
        <div className="ott-card">
          <h4>Multi-Device Support</h4>
          <p>
            Watch on your TV, phone, tablet, or computer – anytime, anywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OttHighlights;

import React, { useState } from 'react';
import './SideBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="layout d-flex">
      <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
        <div className="top">
          <img src="src/assets/logo.png" alt="Logo" className="logo" />
          <a href="/"><i className="ri-home-8-line"></i> <span>Home</span></a>
          <a href="#"><i className="ri-tv-2-fill"></i> <span>Live</span></a>
          <a href="#"><i className="ri-play-circle-fill"></i> <span>Resume</span></a>
          <a href="#"><i className="ri-heart-add-2-fill"></i> <span>Favourite</span></a>
        </div>

        <div className="bottom">
            <button
            className="btn btn-primary m-2 arrow-btn"
            onClick={toggleSidebar}
          >
            <i class="ri-arrow-right-s-line"></i>
          </button>
          <a href="#"><i className="ri-search-line"></i> <span>Search</span></a>
          <a href="#"><i className="ri-user-line"></i> <span>Username</span></a>
          <a href="#"><i className="ri-settings-5-line"></i> <span>Setting</span></a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

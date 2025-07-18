import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import Grid from '../../components/Grid/Grid';
import Footer2 from '../../components/Footer2/Footer2';
import './UserHomePage.css';

function UserHome() {
  return (
    <div className="home-container">
      <SideBar />
      <div className="content-wrapper">
        <div className="main-content">
          <HeroSlider />
          <Grid />
        </div>
        <Footer2 />
      </div>
    </div>
  );
}

export default UserHome;

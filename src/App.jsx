import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

import UserHome from './pages/UserHomePage/UserHomePage';
import HomePage from "./pages/HomePage";
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import PrivacyPolicy from './pages/privacypolicy/PrivacyPolicy';
import Preloader from './components/Preloader/Preloader'; // adjust path if needed

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only run once on mount
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // adjust time to match your Preloader animation

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs once

  return (
    <div className="bg-[#121212] text-[#EEEEEE] font-inter min-h-screen">
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/userhomePage" element={<UserHome />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

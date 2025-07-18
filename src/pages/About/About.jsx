import React from 'react';
import './About.css'; 
import NavBar from "../../components/navbar/NavBar";
import Footer from '../../components/footer/Footer';
function About() {
  return (
    <div>
    <NavBar />
    <main className="about-main">
         
      <section className="about-section">
        <h2>About CUP Entertainment</h2>
        <p>
          Welcome to CUP Entertainment, your ultimate destination for premium digital entertainment. We are dedicated to bringing you a world-class streaming experience with a vast and diverse library of content that caters to every taste and preference.
        </p>
        <p>
          Our platform features a wide array of original productions, critically acclaimed movies, popular TV shows, and exclusive live events. We constantly update our collection to ensure you always have access to the latest and greatest in entertainment.
        </p>
        <p>
          At CUP Entertainment, we believe in seamless access and intuitive design. Our platform is optimized for cross-device compatibility, allowing you to enjoy your favorite content on your TV, smartphone, tablet, or computer—anytime, anywhere. We are committed to fostering a global community through the power of storytelling, breaking down barriers and connecting diverse audiences one captivating narrative at a time.
        </p>
      </section>
      <Footer />
    </main>
    </div>
  );
}

export default About;
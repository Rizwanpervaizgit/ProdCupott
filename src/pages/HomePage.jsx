import { useState } from 'react';
import NavBar from '../components/navbar/NavBar';
import CarouselBanner from '../components/CarouselBanner/CarouselBanner';
import MovieGrid from '../components/moviegrid/MovieGrid';
import About from '../components/about/AboutComp';
import RegistrationModal from '../components/RegistrationModal/RegistrationModal';
import Footer from '../components/footer/Footer';
import Ott from '../components/ottheighlight/ott';
import Catagories from '../components/Categories/CategoriesSection';
import StartFreeTrial from '../components/StartFreeTrial/StartFreeTrial';
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <NavBar />
      <CarouselBanner />
      <MovieGrid />
      <About />
      <Ott />
      <Catagories />
      <StartFreeTrial />
      <Footer />
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HomePage;

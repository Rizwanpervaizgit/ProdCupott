import './Preloader.css';
import logo from '../../assets/pre-img.png';
import { useEffect, useState } from 'react';

const Preloader = ({ onFinish }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Let the logo appear immediately, and fade out after 1.5s (or whatever looks smooth)
    const animationStart = setTimeout(() => {
      setStartAnimation(true); // triggers .hide CSS
    }, 1300); // 🕒 Logo stays fully visible a bit longer

    const finish = setTimeout(() => {
      if (onFinish) onFinish(); // unmounts preloader
    }, 1800); // 🕒 Only 500ms later, instead of 700ms or more

    return () => {
      clearTimeout(animationStart);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div className={`preloader ${startAnimation ? 'hide' : ''}`}>
      <img
        src={logo}
        alt="Logo"
        height="100"
        className="d-inline-block align-top me-2"
      />
    </div>
  );
};

export default Preloader;

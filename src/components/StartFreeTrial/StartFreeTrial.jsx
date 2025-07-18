import React, { useState } from "react"; 
import "./StartFreeTrial.css"; // Import the external CSS
import RegistrationModal from "../RegistrationModal/RegistrationModal";
function StartFreeTrial() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="start-free-trial-section" className="start-free-trial">
      <h3 className="trial-heading">Start Your Free Trial Today!</h3>
      <p className="trial-description">
        Unlock unlimited entertainment. Enjoy exclusive movies, TV shows, and live events. Cancel anytime.
      </p>
    
        <button onClick={() => setIsModalOpen(true)} className="trial-button open-modal-btn">
        Start Your Free Trial
      </button>
         <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

export default StartFreeTrial;

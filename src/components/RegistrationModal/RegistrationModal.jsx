import React, { useState } from "react";
import "./RegistrationModal.css";

const RegistrationModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="registration-modal-overlay">
      <div className="registration-modal">
        <button className="close-modal-btn" onClick={onClose}>
          &times;
        </button>

        {!submitted ? (
          <div className="form-wrapper">
            <h3 className="modal-heading">Join CUP Entertainment Global</h3>
            <p className="modal-subtext">
              CUP Entertainment Global is setting a new standard in digital entertainment...
            </p>
            <form onSubmit={handleSubmit} className="registration-form">

              <div className="form-field">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" required />
              </div>

              <div className="form-field">
                <label htmlFor="emailAddress">Email Address</label>
                <input type="email" id="emailAddress" required />
              </div>

              <div className="form-field">
                <label htmlFor="mobileNumber">Mobile Number (Optional)</label>
                <input type="tel" id="mobileNumber" />
              </div>

              <div className="form-field">
                <label htmlFor="preferredDevice">Preferred Device</label>
                <select id="preferredDevice" required>
                  <option value="">Select a device</option>
                  <option value="smartphone">Smartphone</option>
                  <option value="smarttv">Smart TV</option>
                  <option value="laptop_desktop">Laptop/Desktop</option>
                  <option value="tablet">Tablet</option>
                </select>
              </div>

             <div className="form-field">
                   <label className="genres-label">Genres You Enjoy</label>
                    <div className="genres-grid">
                     {[
                        "Drama", "Thriller", "Comedy", "Action", "Sports",
                         "Documentaries", "Kids", "Reality", "Other"
                      ].map((genre) => (
              <div className="genre-option" key={genre}>
            <span> <input
              type="checkbox"
              id={`genre-${genre.toLowerCase()}`}
               value={genre.toLowerCase()}
             />  </span>
        <label htmlFor={`genre-${genre.toLowerCase()}`}>{genre}</label>
      </div>
    ))}
  </div>
</div>

             <div className="checkbox-row">
 <span><input type="checkbox" id="keepMeInLoop" /></span>
  <span>Keep me in the loop with exclusive updates and access.</span>
</div>


              <button type="submit" className="submit-btn">Register Now</button>
            </form>
          </div>
        ) : (
          <div className="thank-you-message">
            <h3>You're in. Welcome to CUP Entertainment Global.</h3>
            <p>
              We’ve saved your spot for an exclusive first look into a world of high-quality content...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;

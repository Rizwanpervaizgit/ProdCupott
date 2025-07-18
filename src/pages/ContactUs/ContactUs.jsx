import React from 'react';
import './ContactUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
function ContactUs() {
  return (
    <div>
      <NavBar />
    <main className="contact-container">
      
      <section className="contact-form-wrapper rounded shadow-lg p-4">
        <h1 className="text-center mb-4">Contact Us</h1>
        <p className="text-center mb-4">
          We'd love to hear from you! Whether you have a question, feedback, or a partnership inquiry, feel free to reach out.
        </p>

        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" id="name" className="form-control" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" id="email" className="form-control" required />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea id="message" rows="6" className="form-control" required></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Send Message
          </button>
        </form>
      </section>
      <section className="text-center contact-details">
          <h2 className="text-white mb-3">Other Ways to Reach Us</h2>
          <p><i className="fas fa-envelope me-2 text-info"></i> Support@cupentertainment.com</p>
          <p><i className="fas fa-phone me-2 text-info"></i> +97155290862</p>
          <p><i className="fas fa-map-marker-alt me-2 text-info"></i> Rm 1203, 12/F, TOWER 3 CHINA HONG KONG CITY, 33 CANTON RD, TSIM SHA TSUI, HONG KONG</p>
        </section>
      
    </main>
    <Footer />
    </div>
  );
}

export default ContactUs;
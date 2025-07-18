import React from 'react';
import './PrivacyPolicy.css';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <NavBar />
      <div className="privacy-page">
        <div className="privacy-container">
          <div className="policy-content">
            <h1>Privacy Policy</h1>
            <p className="effective-date">
              Effective Date: 15/07/2025<br />
              Website: www.cupentertainment.com<br />
              Entity: CUP Entertainment Global
            </p>
            <p>
              At CUP Entertainment Global, your privacy and trust are extremely important to us. 
              This Privacy Policy outlines how we collect, use, and protect your personal data, 
              as well as how we protect the digital content on our platform.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              When you engage with our platform or sign up through www.cupentertainment.com (the "Site"), we may collect:
            </p>
            <ul>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Mobile Number (optional)</li>
              <li>Genre and content preferences</li>
              <li>Device and browser information</li>
              <li>IP address, location, and usage data through cookies and analytics tools</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <ul>
              <li>Register your interest and send you platform-related updates</li>
              <li>Provide you with personalized recommendations and early access notifications</li>
              <li>Deliver promotional and marketing content</li>
              <li>Improve website functionality, user experience, and analytics</li>
            </ul>

            <h2>3. Licensed Content and Intellectual Property</h2>
            <p>
              CUP Entertainment Global hosts and distributes legally acquired, paid, and licensed content, including but not limited to:
            </p>
            <ul>
              <li>Original dramas produced by ETS Productions</li>
              <li>Licensed international movies and shows</li>
              <li>Sports content and live TV streams</li>
            </ul>
            <p>
              All content available on the CUP Entertainment platform is either produced in-house or legally licensed for digital distribution. 
              Unauthorized copying, reproduction, screen recording, redistribution, or re-uploading of this content is strictly prohibited.
            </p>
            <p>
              We take intellectual property rights very seriously and will pursue strict legal action—including reporting to local authorities 
              and initiating copyright infringement claims—against any individual or entity found violating these rights.
            </p>

            <h2>4. Marketing and Communication</h2>
            <p>
              By submitting your information, you consent to receive platform updates, promotional offers, content previews, and marketing emails or SMS. You may opt out at any time using the unsubscribe link in our emails or by contacting us directly.
            </p>
            <p>
              Your data will not be sold or rented. It may be shared only with verified partners helping us deliver marketing and analytics services.
            </p>

            <h2>5. Cookies & Analytics</h2>
            <p>
              Our Site uses cookies and third-party tools like Google Analytics and Meta Pixel to analyze user behavior, measure performance, and improve functionality. You can manage or disable cookies through your browser settings or adjust your ad preferences through Google and Meta.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We maintain reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, or misuse.
            </p>

            <h2>7. External Links</h2>
            <p>
              Our platform may link to third-party websites or apps (such as social media or app stores). We are not responsible for their privacy practices and recommend reviewing their privacy policies separately.
            </p>

            <h2>8. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights including:
            </p>
            <ul>
              <li>Accessing, correcting, or deleting your personal data</li>
              <li>Withdrawing consent for marketing communications</li>
              <li>Requesting data usage limitations</li>
            </ul>
            <p>
              To exercise your rights, please contact us using the details below.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              For privacy-related inquiries, content concerns, or general questions, please contact:
            </p>
            <ul>
              <li>Email: privacy@cupentertainment.com</li>
              <li>Website: www.cupentertainment.com</li>
            </ul>

            <h2>10. Policy Updates</h2>
            <p>
              This Privacy Policy may be updated from time to time. Updates will be posted on this page with a revised "Effective Date." 
              Continued use of the platform implies acceptance of any revised terms.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
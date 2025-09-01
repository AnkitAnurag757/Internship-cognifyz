import React from 'react';
import ContactForm from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="row shadow-lg rounded-4 overflow-hidden w-100" style={{ maxWidth: '900px' }}>
        {/* Contact Form */}
        <div className="col-md-7 p-5 bg-white">
          <h2 className="mb-4 fw-bold text-center text-primary">
            Get in Touch with Cognifyz Technologies
          </h2>
          <ContactForm />
        </div>

        {/* Contact Info Panel */}
        <div className="col-md-5 p-5 text-white bg-primary d-flex flex-column justify-content-center">
          <h3 className="mb-4">Contact Info</h3>
          <p><strong>Address:</strong> Kalyanpur, Kanpur , INDIA</p>
          <p><strong>Email:</strong> anuragankit@gmail.com</p>
          <p><strong>Phone:</strong> +91 8433387226</p>
          <p>We usually respond within 24 hours. Let's innovate together!</p>
        </div>
      </div>
    </div>
  );
}

export default App;

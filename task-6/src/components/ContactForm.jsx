// src/components/ContactForm.js
import React, { useState } from 'react';
import InputField from './InputField';
import TextArea from './TextArea';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSuccess('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => setSuccess(''), 5000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit} noValidate>
        <InputField
          label="Your Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
            error={errors.name}
        />
        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextArea
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
        />
        <button type="submit" className="btn btn-primary w-100 mt-3">
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactForm;

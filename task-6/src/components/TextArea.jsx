// src/components/TextArea.js
import React from 'react';

const TextArea = ({ label, name, value, onChange, error }) => {
  return (
    <div className="form-floating mb-3">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        id={name}
        placeholder={label}
        style={{ height: '120px' }}
      ></textarea>
      <label htmlFor={name}>{label}</label>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextArea;

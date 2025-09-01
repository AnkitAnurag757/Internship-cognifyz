// src/components/InputField.js
import React from 'react';

const InputField = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        id={name}
        placeholder={label}
      />
      <label htmlFor={name}>{label}</label>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default InputField;

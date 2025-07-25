import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ message }) => (
  <div className="error-message alert alert-danger mt-3">{message}</div>
);

export default ErrorMessage;

import React from 'react';
import './FeedbackModal.css';

const FeedbackModal = ({ isOpen, onClose, message, isCorrect }) => {
  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className={`box ${isCorrect ? 'has-background-success' : 'has-background-danger'}`}>
          <p className={`has-text-white ${isCorrect ? 'correct-answer' : 'wrong-answer'}`}>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;

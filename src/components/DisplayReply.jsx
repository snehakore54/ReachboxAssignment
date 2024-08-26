import React from 'react';
import { useLocation } from 'react-router-dom';
import './DisplayReply.css'; // Import the CSS file for styling

const DisplayReply = () => {
  const location = useLocation();
  const state = location.state || {};
  const replyText = state.replyText || "No reply text found"; // Default message if no reply text

  return (
    <div className="display-reply-container">
      <h1>Display Reply</h1>
      <p>{replyText}</p> 
    </div>
  );
};

export default DisplayReply;

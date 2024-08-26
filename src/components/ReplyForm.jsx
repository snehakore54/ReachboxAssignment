import React, { useState } from 'react';
import axios from 'axios';
import './ReplyForm.css';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';

const ReplyForm = ({ threadId, onClose, onReplySubmit }) => {
  const [from, setFrom] = useState('sender@example.com');
  const [to, setTo] = useState('receiver@example.com');
  const [subject, setSubject] = useState('Reply Subject');
  const [reply, setReply] = useState('');

  const handleReply = () => {
    const payload = {
      from,
      to,
      subject,
      body: `<html>${reply}</html>`,
    };

    axios
      .post(`/reply/${threadId}`, payload)
      .then(() => {
        console.log('Reply sent successfully');
        onReplySubmit(payload); // Pass the reply payload to the parent component
        setReply('');
        onClose(); // Close the form after sending the reply
      })
      .catch((error) => console.error('Error sending reply:', error));
  };

  return (
    <div className="reply-form-container">
      <div className="reply-form-header">
        <span className="reply-form-title">Reply</span>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      <div className="reply-form-fields">
        <label>
          From:
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="reply-form-input"
          />
        </label>
        <label>
          To:
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="reply-form-input"
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="reply-form-input"
          />
        </label>
      </div>
      <textarea
        className="reply-textarea"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Write your reply here..."
      />
      <div className="reply-form-footer">
        <button className="send-reply-button" onClick={handleReply}>
          <FaPaperPlane /> Send Reply
        </button>
      </div>
    </div>
  );
};

export default ReplyForm;


import React from 'react';
import './EmailDetails.css';
import Topbar from './Topbar';

const EmailDetails = ({ onReplyClick, replyText }) => {
  return (
    <div>
      <div className="email-details">
        <Topbar />
        <h3>New Product Launch</h3>
        <p>from: jeanne@icloud.com cc: lennon.j@mail.com</p>
        <p>Hi {`{FIRST_NAME}`},</p>
        <p>
          I would like to introduce you to SaaSgrow, a productized design service specifically tailored for SaaS startups. Our aim is to help you enhance the user experience and boost the visual appeal of your products.
        </p>
        {replyText && (
          <div className="reply-section">
            <h4>Reply:</h4>
            <p>{replyText}</p>
          </div>
        )}
      </div>
      <button className="reply-button" onClick={onReplyClick}>Reply</button>
    </div>
  );
};

export default EmailDetails;

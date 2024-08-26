import React from 'react';
import './InboxList.css';

const InboxList = () => {
  const emails = [
    { id: 1, sender: 'Beata@gmail.com', preview: "I've tried a lot and .", status: 'Interested', date: 'Mar 7' },
    { id: 2, sender: 'Sanya@gmail.com', preview: "I've tried a lot and .", status: 'Closed', date: 'Mar 7' },
    { id: 3, sender: 'william@gmail.com', preview: 'Payment not going through', status: 'Interested', date: 'Mar 7' },
    { id: 4, sender: 'johnson@gmail.com', preview: 'Could you tell me more about it', status: 'Meeting Booked', date: 'Mar 7' },
    { id: 5, sender: 'orlando@gmail.com', preview: 'Hi, I am interested', status: 'Meeting Completed', date: '18:30' },
  ];

  return (
    <div className="inbox-list">
      <h3>All Inbox(s)</h3>
      <div className="email-items">
        {emails.map(email => (
          <div key={email.id} className="email-item">
            <div className="email-sender">{email.sender}</div>
            <div className="email-preview">{email.preview}</div>
            <div className="email-status">{email.status}</div>
            <div className="email-date">{email.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InboxList;

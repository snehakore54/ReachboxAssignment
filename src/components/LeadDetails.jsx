import React from 'react';
import './LeadDetails.css';

const LeadDetails = () => {
  return (
    <div className="lead-details">
      <h3>Lead Details</h3>
      <p><strong>Name:</strong> Orlando</p>
      <p><strong>Contact No:</strong> +54-9062827869</p>
      <p><strong>Email ID:</strong> orlando@gmail.com</p>
      <p><strong>LinkedIn:</strong> linkedin.com/in/timvadde/</p>
      <p><strong>Company Name:</strong> Reachinbox</p>
      <h3>Activities</h3>
      <p><strong>Campaign Name:</strong> 3 Steps | 5 Days in Sequence</p>
      <p><strong>Step 1: Email</strong> - Sent 3rd, Feb</p>
      <p><strong>Step 2: Email</strong> - Opened 5th, Feb</p>
      <p><strong>Step 3: Email</strong> - Opened 5th, Feb</p>
    </div>
  );
};

export default LeadDetails;

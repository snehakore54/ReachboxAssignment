import React, { useState } from 'react';
import ReplyForm from './ReplyForm';

const ParentComponent = () => {
  const [isReplyFormVisible, setReplyFormVisible] = useState(false);

  const handleOpenReplyForm = () => {
    setReplyFormVisible(true);
  };

  const handleCloseReplyForm = () => {
    setReplyFormVisible(false);
  };

  return (
    <div>
      <button onClick={handleOpenReplyForm}>Reply</button>
      {isReplyFormVisible && (
        <ReplyForm threadId="123" onClose={handleCloseReplyForm} />
      )}
    </div>
  );
};

export default ParentComponent;

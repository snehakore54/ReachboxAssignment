import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaPaperPlane, FaList, FaBell, FaChartBar, FaSun, FaMoon } from 'react-icons/fa';
import './OneBox.css';
import LeadDetails from './LeadDetails'; 
import EmailDetails from './EmailDetails';
import InboxList from './InboxList';
import ReplyForm from './ReplyForm';

const OneBox = () => {
  const [items, setItems] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedThreadId, setSelectedThreadId] = useState(null);
  const [replyText, setReplyText] = useState('');

  const navigate = useNavigate(); // Use useNavigate

  useEffect(() => {
    axios.get('/onebox/list')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching data:', error));

    const handleKeyPress = (event) => {
      if (event.key === 'd') {
        if (items.length > 0) {
          handleDelete(items[0].id);
        }
      } else if (event.key === 'r') {
        setShowReplyForm(true);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [items, handleDelete]); // Added handleDelete to the dependency array

  const handleDelete = (threadId) => {
    axios.delete(`/onebox/${threadId}`)
      .then(() => {
        setItems(items.filter(item => item.id !== threadId));
      })
      .catch(error => console.error('Error deleting item:', error));
  };

  const handleClick = () => {
    setIsClicked(true); 
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const handleReplyClick = (threadId) => {
    setSelectedThreadId(threadId);
    setShowReplyForm(true);
  };

  const handleCloseReplyForm = () => {
    setShowReplyForm(false);
  };

  const handleReplySubmit = (reply) => {
    setReplyText(reply.body);
    navigate('/display-reply', { state: { replyText: reply.body } });
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="navbar">
        <div className="navbar-item">Onebox</div>
        <div className="navbar-item">
          <img src="https://avatars.githubusercontent.com/u/32645346?v=4" alt="Avatar" />
        </div>
        <div className="navbar-item">
          <img src="https://avatars.githubusercontent.com/u/22829420?v=4" alt="Avatar" />
        </div>
        <div className="navbar-item">
          <img src="https://avatars.githubusercontent.com/u/52929643?v=4" alt="Avatar" />
        </div>

        <div className={`content-header ${darkMode ? 'dark' : 'light'}`}>
          <div className="workspace">
            <button onClick={toggleMode} className="brightness-toggle">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <span style={{ paddingLeft: '15px', color:'white' }}>Tim's Workspace</span>
          </div>
          <i className="fas fa-chevron-down"></i>
        </div>

        <div className="sidebar sid-bar">
          <div>
            <img className="img" src="https://cdn-1.webcatalog.io/catalog/reachinbox/reachinbox-icon-filled-256.png?v=1706032999078" alt="m" />
          </div>
          <div className="sidebar-icon">
            <FaHome />
          </div>
          <div className="sidebar-icon">
            <FaUser />
          </div>
          <div className="sidebar-icon">
            <FaEnvelope />
          </div>
          <div className="sidebar-icon">
            <FaPaperPlane />
          </div>
          <div className="sidebar-icon">
            <FaList />
          </div>
          <div className="sidebar-icon">
            <FaBell />
          </div>
          <div className="sidebar-icon">
            <FaChartBar />
          </div>
          <div className="sidebar-icon ic">AS</div>
        </div>
      </div>

      <div className="main-content" onClick={handleClick}>
        {isClicked ? (
          <div className={`content-main ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <InboxList />
            <EmailDetails 
              onReplyClick={handleReplyClick} 
              replyText={replyText}
            />
            {showReplyForm && (
          <div className="reply-popup">
            <ReplyForm 
              threadId={selectedThreadId} 
              onClose={handleCloseReplyForm} 
              onReplySubmit={handleReplySubmit} 
            />
            <button onClick={handleCloseReplyForm} className="close-button">Close</button>
          </div>
        )}
            <LeadDetails />  
          </div>
        ) : (
          <div className="cccc">
            <img
              src="/Screenshot 2024-08-24 233115.png"
              alt="Envelope"
              className="card-image"
            />
            <div className="card-content">
              <h2>
                It's the beginning of a legendary <span>sales</span> pipeline
              </h2>
              <p>
                When you have inbound E-mails you'll see them here
              </p>
            </div>
          </div>
        )}
        <div className="items-list">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name}
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <button onClick={() => handleReplyClick(item.id)}>Reply</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OneBox;

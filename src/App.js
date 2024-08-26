import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import OneBox from './components/OneBox';
import DisplayReply from './components/DisplayReply';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        {!user ? (
          <Login onLogin={(user) => setUser(user)} />
        ) : (
          <Routes>
            <Route path="/" element={<OneBox />} />
            <Route path="/display-reply" element={<DisplayReply />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;

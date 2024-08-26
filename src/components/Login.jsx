import React from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const handleGoogleLogin = () => {
    if (window.gapi) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      auth2.signIn().then((user) => {
        const profile = user.getBasicProfile();
        console.log('Signed in user:', profile.getName(), profile.getEmail());
        window.location.href = '/onebox'; 
      }).catch((error) => {
        console.error('Error signing in:', error);
      });
    } else {
      const mockUser = { name: 'Sneha Kore', email: 'snehakore054@gmail.com' };
      console.log('Signed in user:', mockUser.name, mockUser.email);
      onLogin(mockUser);
    }
  };

  return (
    <div className="login-page">
      <div className="main-content">
        <div className='reach'>
          <img src="https://cdn-1.webcatalog.io/catalog/reachinbox/reachinbox-icon-filled-256.png?v=1706032999078" alt="m"/>
          <h1>REACHINBOX</h1>
        </div>
        <div className="login-container">
          <div className="login-box">
            <h1 className='heading'>Create a new account</h1>
            <button className="google-button" onClick={handleGoogleLogin}>
              <img src="https://news-cdn.softpedia.com/images/news2/the-new-google-logo-is-a-lesson-in-modern-design-490648-3.jpg" alt="Google Logo" />
              Sign Up with Google
            </button>
            <button className="create-account-button">Create an Account</button>
            <p>Already have an account? <a href="/signin">Sign In</a></p>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <small>&copy; 2023 Reachinbox. All Rights Reserved.</small>
      </div>
    </div>
  );
};

export default Login;

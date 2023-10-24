import React from 'react';
import PropTypes from 'prop-types';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function Header({ text, bgColor, textColor }) {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const name = user ? user.displayName : ''; // Check if the user is authenticated

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
        console.log('Signed out successfully');
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
      {user && <p className='username mx-2'>Welcome {name}</p>} {/* Conditionally render the welcome message */}
      {user && <button onClick={handleLogout} className="btn btn-primary mx-2">Sign Out</button>} {/* Conditionally render the sign-out button */}
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;

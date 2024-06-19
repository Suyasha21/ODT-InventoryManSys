

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Set isLoggedIn to false when logout button is clicked
    sessionStorage.setItem('isLoggedIn', 'false');

    // Redirect to login page
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;


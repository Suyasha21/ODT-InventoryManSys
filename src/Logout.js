



import React, { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    
    sessionStorage.removeItem("isLoggedIn");

  }, []);

  return (
    <div>Logout</div>
  );
}

export default Logout;

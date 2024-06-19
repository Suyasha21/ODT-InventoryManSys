import React, { useRef ,useState, useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Logout from "./Logout";
function LocalStorage() {
  const emailId = useRef();
  const pass = useRef();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();


    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }


    fetch('https://app.my.contact/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Invalid email or password');
        }
        return res.json();
      })
      .then((data) => {
        
        localStorage.setItem('email', email);
        localStorage.setItem('isLoggedIn', 'true');
  
        // Redirect to dashboard or any other page upon successful login
        navigate('/allocation_form');
      })
      .catch((err) => {
        toast.error('Login failed due to: ' + err.message);
      });
  };

  const handleLogout = () => {
    // Set isLoggedIn to false when logout button is clicked
    localStorage.setItem('isLoggedIn', 'false');
  };
  // const handleLogout = () => {
    
  //   sessionStorage.removeItem("isLoggedIn");


  // };

  return (
    <>
      <input ref={emailId} onChange={(e) => setEmail(e.target.value)} />
      <input ref={pass} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login In</button>
      <button onClick={handleLogout}>Logout</button>
      <ToastContainer />
    </>
  );
}

export default LocalStorage;

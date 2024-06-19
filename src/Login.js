

// // Login.js
// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import './style.css';
// import Navbar from './Navbar';
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the user is already logged in
//     // const isLoggedIn = localStorage.getItem('isLoggedIn');
//     const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
//     if (isLoggedIn === 'true') {
//       console.log('Users Login')
//       navigate('/dashboard');
//     }
//     // else {
      
//     //   console.log('Users Not Login')
//     //   navigate('/');
//     // }
//     // else{
//     //   navigate('/error');
//     // }
//   }, []);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Validate email and password
//     if (!email || !password) {
//       toast.error('Please enter both email and password');
//       return;
//     }
//   console.log('api hitting step');
//     // Perform login authentication through API
//   const data =  fetch('https://app.my.contact/api/users/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
     
//     })
//     console.log(data)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Invalid email or password');
//         }
//         return res.json();
//       })
//       // console.log(body)
//     .then(() => {
//         // Assuming the API returns some token upon successful login
//         // Store token in localStorage or state as needed
//         localStorage.setItem('email', email);
//         localStorage.setItem('isLoggedIn', 'true');
//         // Redirect to dashboard or any other page upon successful login
//         navigate('/dashboard');
//         // localStorage.setItem('isLoggedIn', false);
//         // navigate('/');
//       })
//       .catch((err) => {
//         toast.error('Login failed due to: ' + err.message);
//       });
//   };

//   return (
//     <div>
//       <Navbar/>
    
//     <div className='login template d-flex justify-content-center align-items-center vh-100'>
//       <div className='40-w p-5 rounded bg-white'>
//         <form onSubmit={handleLogin}>
//           <h3 className='text-center'>Login In</h3>
//           <div className='mb-2'>
//             <label htmlFor="email">Email</label>
//             <input type="email" placeholder="Enter Email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
//           </div>
//           <div className='mb-2'>
//             <label htmlFor="password">Password</label>
//             <input type="password" placeholder="Enter Password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
//           </div>
//           <div className="mb-2">
//             <input type="checkbox" className='custom-control custom-checkbox' id="check" />
//             <label htmlFor="check" className='custom-input-label ms-2'>
//               Remember me
//             </label>
//           </div>
//           <div className='d-grid'>
//             <button type="submit" className='btn btn-primary'>Login In</button>
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Login;










// // Login.js
// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import './style.css';
// import sessionStorage from './SessionStorage';
// import Navbar from './Navbar';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {

  
//     const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
//     if (isLoggedIn === 'true') {
//       console.log('Users Login')
//       navigate('/allocation_form');
//     }
//     else {
      
//       console.log('Users Not Login')
//       navigate('/');
//     }
    
//   }, []);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Validate email and password
//     if (!email || !password) {
//       toast.error('Please enter both email and password');
//       return;
//     }

//     // Perform login authentication through API
//     fetch('https://app.my.contact/api/users/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Invalid email or password');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         // Assuming the API returns some token upon successful login
//         // Store token in localStorage or state as needed
//         sessionStorage.setItem('email', email);
//         sessionStorage.setItem('isLoggedIn', 'true');
//         localStorage.setItem('email', email);
//         localStorage.setItem('isLoggedIn', 'true');
//         // Redirect to dashboard or any other page upon successful login
//         navigate('/allocation_form');
//         // localStorage.setItem('isLoggedIn', false);
//         // navigate('/');
//       })
//       .catch((err) => {
//         toast.error('Login failed due to: ' + err.message);
//       });
//   };

//   const handleLogout = () => {
//     // Clear session token upon logout
//     sessionStorage.removeItem("isLoggedIn");

//     // Perform any additional logout actions, such as redirecting to the login page
//     // window.location.href = '/login';
//   };
//   return (
//     <div>
//       <Navbar/>
    
//     <div className='login template d-flex justify-content-center align-items-center vh-100'>
//       <div className='40-w p-5 rounded bg-white'>
//         <form onSubmit={handleLogin}>
//           <h3 className='text-center'>Login In</h3>
//           <div className='mb-2'>
//             <label htmlFor="email">Email</label>
//             <input type="email" placeholder="Enter Email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
//           </div>
//           <div className='mb-2'>
//             <label htmlFor="password">Password</label>
//             <input type="password" placeholder="Enter Password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
//           </div>
//           <div className="mb-2">
//             <input type="checkbox" className='custom-control custom-checkbox' id="check" />
//             <label htmlFor="check" className='custom-input-label ms-2'>
//               Remember me
//             </label>
//           </div>
//           <div className='d-grid'>
//             <button type="submit" className='btn btn-primary'>Login In</button>
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Login;








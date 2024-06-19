
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import { useNavigate } from 'react-router-dom'
// import Inventory_Addition from './Inventory Addition';
// import LocalStorage from './LocalStorage';
// import Dashboard from './Dashboard';
// import Error from './Error';
// import SignOut from './SignOut';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Submission_Form from './Submission_Form';
// import Allocation_Form from './Allocation_Form';
// import Purchase_Form from './Purchase_Form';
// import SessionStorage from './SessionStorage';
// const isLoggedIn = sessionStorage.getItem('isLoggedIn');




// function App() {


//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/purchase" element={<Purchase_Form/>}/>
//         <Route path="/submission_form" element={<Submission_Form />} />
//         <Route path="/inventory_add" element={<Inventory_Addition/>}/>
//         <Route path="/allocation_form" element={<Allocation_Form/>}/>
//         <Route path="/signout" element={<SignOut/>}/> */}
//         {/* <Route path="/error"  element={<Error/>}/> */}
//         {/* <Route path="/dashboard" element={!isLoggedIn ?<navigate to="/" />: <Dashboard/> }/>
//         <Route path="/" element={isLoggedIn ? <Dashboard/> : <Login/>}/> */}
//          {/* logic one -  when i am logged in that means the session storage has some isLogged == true than what i have to do is that i can go to any route but when i am logged in that means the session storage is false than i have to do one thing that any routelink would let me go to only login page and any random route would show up the 404 page */}
//          <Route path="/allocation_form" element={!isLoggedIn ? <navigate to="/"/>:<allocation_form/>}/>
//          <Route path="/purchase" element={!isLoggedIn ? <navigate to ="/"/> : <purchase/>}/>
//          <Route path="/inventory_add" element={!isLoggedIn ? <navigate to="/"/>:<inventory_add/>}/>
//          <Route path="/submission_form" element={!isLoggedIn ? <navigate to="/"/>:<submission_form/>}/>
//          <Route path="/" element={!isLoggedIn ? <navigate to="inventory_add"/>:<Login/>}/>
        
       
//         <Route path="*" element={<Error/>} />
//         {/* <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <navigate to="/" />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





// import React from 'react';
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; // Import useNavigate
// import Login from './Login';
// import Inventory_Addition from './Inventory Addition';
// import Dashboard from './Dashboard';
// import Error from './Error';
// import SignOut from './SignOut';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Submission_Form from './Submission_Form';
// import Allocation_Form from './Allocation_Form';
// import Purchase_Form from './Purchase_Form';
// import SessionStorage from './SessionStorage';

// function App() {
//   const navigate = useNavigate(); // Use useNavigate hook

//   const isLoggedIn = sessionStorage.getItem('isLoggedIn');

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/allocation_form" element={!isLoggedIn ? navigate('/') : <Allocation_Form />} />
//         <Route path="/purchase" element={!isLoggedIn ? navigate('/') : <Purchase_Form />} />
//         <Route path="/inventory_add" element={!isLoggedIn ? navigate('/') : <Inventory_Addition />} />
//         <Route path="/submission_form" element={!isLoggedIn ? navigate('/') : <Submission_Form />} />
//         <Route path="/" element={!isLoggedIn ? <Inventory_Addition /> : <Login />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





import React from 'react';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
// import Login from './Login';
import Inventory_Addition from './Inventory Addition';
import Submission_Form from './Submission_Form';
import Allocation_Form from './Allocation_Form';
import Purchase_Form from './Purchase_Form';
import LoginApi from './LoginApi';

import Error from './Error';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login_api" element={<LoginApi/>}/>
        {/* <Route path="/allocation_form" element={isLoggedIn ? <Allocation_Form /> : <Navigate to="/" />} />
        <Route path="/purchase" element={isLoggedIn ? <Purchase_Form /> : <Navigate to="/" />} />
        <Route path="/inventory_add" element={isLoggedIn ? <Inventory_Addition /> : <Navigate to="/" />} />
        <Route path="/submission_form" element={isLoggedIn ? <Submission_Form /> : <Navigate to="/" />} />
        */}
        {/* <Route path="/" element={!isLoggedIn ? <Login /> : <Navigate to="/allocation_form" replace />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;




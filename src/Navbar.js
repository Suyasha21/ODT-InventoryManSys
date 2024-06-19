

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/White-logo-1.png'; // Import the logo image


function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="100" height="50" className="d-inline-block align-top" />
        </Link>
        <button className="navbar-toggler" type="button" onClick={handleDropdownToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${openDropdown ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/allocation_form">Allocation Form</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/purchase">Purchase Form</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/submission_form">Submission Form</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/inventory_add">Inventory Addition</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signout">Sign Out</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import logo from './images/White-logo-1.png'; // Import the logo image
// import userIcon from './images/user.jpg'; // Import the user icon image

// function Navbar() {
//   const location = useLocation();
//   const [openDropdown, setOpenDropdown] = useState(false);

//   const handleDropdownToggle = () => {
//     setOpenDropdown(!openDropdown);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           <img src={logo} alt="Logo" width="100" height="50" className="d-inline-block align-top" />
//         </Link>
//         <button className="navbar-toggler" type="button" onClick={handleDropdownToggle}>
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${openDropdown ? 'show' : ''}`}>
//           <ul className="navbar-nav ms-auto">


//           {location.pathname !== "/allocation_form" && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/allocation_form">Allocation Form</Link>
//               </li>
//             )}
          
//           {location.pathname !== "/purchase" && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/purchase">Purchase Form</Link>
//               </li>
//             )}
//            {location.pathname !== "/submission_form" && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/submission_form">Submission Form</Link>
//               </li>
//             )}
//            {location.pathname !== "/inventory_add" && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/inventory_add">Inventory Addition Form</Link>
//               </li>
//             )}
            

//             {location.pathname !== "/" && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">Login</Link>
//               </li>
//             )}
            
//             <li className="nav-item">
//               <Link className="nav-link" to="/signout">Sign Out</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import logo from './images/White-logo-1.png'; // Import the logo image


// function Navbar() {
//   const location = useLocation();

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           <img src={logo} alt="Logo" width="100" height="50" className="d-inline-block align-top" />
//         </Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className={`nav-item ${location.pathname === '/allocation_form' ? 'active' : ''}`}>
//               <Link className="nav-link" to="/allocation_form">Allocation Form</Link>
//             </li>
//             <li className={`nav-item ${location.pathname === '/purchase' ? 'active' : ''}`}>
//               <Link className="nav-link" to="/purchase">Purchase Form</Link>
//             </li>
//             <li className={`nav-item ${location.pathname === '/submission_form' ? 'active' : ''}`}>
//               <Link className="nav-link" to="/submission_form">Submission Form</Link>
//             </li>
//             <li className={`nav-item ${location.pathname === '/inventory_add' ? 'active' : ''}`}>
//               <Link className="nav-link" to="/inventory_add">Inventory Addition Form</Link>
//             </li>
//             <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
//               <Link className="nav-link" to="/">Login</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/signout">Sign Out</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import './style.css';
import Navbar from './Navbar';
function Submission_Form() {
  const [itemName, setItemName] = useState('');
  const [submission_date, setSubmissionDate] = useState('');
  const [submitted_by, setSubmittedBy] = useState('');
  const [submitted_to, setSubmittedTo] = useState('');

  return (
    <div>
      <Navbar/>
    <div className='login template d-flex justify-content-center align-items-center vh-100'>
      <div className='40-w p-5 rounded bg-white'>
        <form>
          <h3 className='text-center'>Submission Form</h3>
        
          <div className='mb-2'>
            <label htmlFor="itemName">Item Name</label> 
            <input type="text" placeholder="Enter Item Name" className='form-control' value={itemName} onChange={(e) => setItemName(e.target.value)} />
          </div>

          <div className='mb-2'>
            <label htmlFor="submission_date">Submission Date</label> 
            <input type="date" placeholder="Enter submission date" className='form-control' value={submission_date} onChange={(e) => setSubmissionDate(e.target.value)} />
          </div>

          <div className='mb-2'>
            <label htmlFor="submitted_by">Submitted by</label> 
            <input type="text" placeholder="Submitted by" className='form-control' value={submitted_by} onChange={(e) => setSubmittedBy(e.target.value)} />
          </div>

          <div className='mb-2'>
            <label htmlFor="submitted_to">Submitted to</label> 
            <input type="text" placeholder="Submitted to" className='form-control' value={submitted_to} onChange={(e) => setSubmittedTo(e.target.value)} />
          </div>
      
        </form>
      </div>
    </div>
    </div>
  );
}

export default Submission_Form;









import React, { useState } from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

function Allocation_Form() {
  const [itemName, setItemName] = useState('');
  const [allocation_date, setAllocationDate] = useState('');
  const [allocated_by, setAllocatedBy] = useState('');
  const [allocated_to, setAllocatedTo] = useState('');

  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className='login template d-flex justify-content-center align-items-center vh-100'>
        <div className='40-w p-5 rounded bg-white'>
          <form>
            <h3 className='text-center'>Allocation Form</h3>
            <div className='mb-2'>
            <label htmlFor="itemName">Item Name</label> 
            <input type="text" placeholder="Enter Item Name" className='form-control' value={itemName} onChange={(e) => setItemName(e.target.value)} />
          </div>

          <div className='mb-2'>
            <label htmlFor="allocation_date">Allocation Date</label> 
            <input type="date" placeholder="Enter allocation date" className='form-control' value={allocation_date} onChange={(e) => setAllocationDate(e.target.value)} />
          </div>

          <div className='mb-2'>
            <label htmlFor="allocated_to">Allocated to</label> 
            <input type="text" placeholder="Allocated to" className='form-control' value={allocated_to} onChange={(e) => setAllocatedTo(e.target.value)} />
          </div>

          <div className='mb-2'>
            <label htmlFor="allocated_by">Allocated by</label> 
            <input type="text" placeholder="Allocated by" className='form-control' value={allocated_by} onChange={(e) => setAllocatedBy(e.target.value)} />
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Allocation_Form;

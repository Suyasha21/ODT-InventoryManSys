

import React, { useState } from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

function Inventory_Addition() {
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('');
  const [inventory_id, setInventoryId] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [purchase_date, setPurchaseDate] = useState('');

  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className='login template d-flex justify-content-center align-items-center vh-100'>
        <div className='40-w p-5 rounded bg-white'>
          <form>
            <h3 className='text-center'>Inventory Addition Form</h3>
          
            <div className='mb-2'>
              <label htmlFor="item">Item</label> 
              <input type="text" placeholder="Enter Item" className='form-control' value={item} onChange={(e) => setItem(e.target.value)} />
            </div>

            <div className='mb-2'>
              <label htmlFor="category">Category</label> 
              <input type="text" placeholder="Enter category" className='form-control' value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>

            <div className='mb-2'>
              <label htmlFor="inventory_id">Inventory ID</label> 
              <input type="text" placeholder="Enter Inventory ID" className='form-control' value={inventory_id} onChange={(e) => setInventoryId(e.target.value)} />
            </div>

            <div className='mb-2'>
              <label htmlFor="brand">Brand</label> 
              <input type="text" placeholder="Enter Brand" className='form-control' value={brand} onChange={(e) => setBrand(e.target.value)} />
            </div>

            <div className='mb-2'>
              <label htmlFor="price">Price</label> 
              <input type="number" placeholder="Enter Price" className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>

            <div className='mb-2'>
              <label htmlFor="purchase_date">Purchase Date</label> 
              <input type="date" placeholder="Enter Purchase Date" className='form-control' value={purchase_date} onChange={(e) => setPurchaseDate(e.target.value)} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Inventory_Addition;

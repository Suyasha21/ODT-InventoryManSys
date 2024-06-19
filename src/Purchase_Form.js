import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import './style.css';

function Purchase_Form() {
  const [itemName, setItemName] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');

  return (
    <div>
      <Navbar/>
    <div className='login template d-flex justify-content-center align-items-center vh-100'>
      <div className='40-w p-5 rounded bg-white'>
        <form>
          <h3 className='text-center'>Purchase Form</h3>
        
          <div className='mb-2'>
            <label htmlFor="itemName">Item Name</label> 
            <input type="text" placeholder="Enter Item Name" className='form-control' value={itemName} onChange={(e) => setItemName(e.target.value)} />
          </div>

             
       
          <div className='mb-2'>
            <label htmlFor="purchaseDate">Purchase Date</label> 
            <input type="date" placeholder="Enter purchase date" className='form-control' value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
          </div>

          <div className='mb-2'>
            <label htmlFor="quantity">QTY</label> 
            <input type="number" placeholder="Enter QTY" className='form-control' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </div>

          <div className='mb-2'>
            <label htmlFor="price">Price</label> 
            <input type="number" placeholder="Enter price" className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>

          <div className='mb-2'>
            <label htmlFor="brand">Brand</label> 
            <input type="text" placeholder="Enter brand name" className='form-control' value={brand} onChange={(e) => setBrand(e.target.value)} />
          </div>
      
        </form>
      </div>
    </div>
    </div>
  );
}

export default Purchase_Form;
import React,{ useState, useEffect } from 'react'
import LocalStorage from './LocalStorage';
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
function LoginApi(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            // navigate("/purchase");
        }
    },[])
async function login(){
    console.warn("data", email, password);
  
    let item ={email, password};
    let result = await fetch("https://app.my.contact/api/users/login",{
    
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
       "Accept" : 'application/json'
    },
  body:JSON.stringify(item)

    });
result = await result.json();
localStorage.setItem("user-info",JSON.stringify(result));
// navigate("/purchase");

}



  return (
        <div>
          <Navbar/>
        
        <div className='login template d-flex justify-content-center align-items-center vh-100'>
          <div className='40-w p-5 rounded bg-white'>
            <form >
              <h3 className='text-center'>Login In</h3>
              <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter Email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='mb-2'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="mb-2">
                <input type="checkbox" className='custom-control custom-checkbox' id="check" />
                <label htmlFor="check" className='custom-input-label ms-2'>
                  Remember me
                </label>
              </div>
              <div className='d-grid'>
              <button onClick={login}className="btn btn-primary">Login</button>
             
              </div>
            </form>
          </div>
        </div>
        </div>
      );
    
}

export default LoginApi

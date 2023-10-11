import React, { useState } from 'react'
import Back from '../assets/logInImg.png'
import '../Login and SignIn/LogIn.css'
import logo from '../assets/LogoPng.png'

import { useNavigate } from 'react-router-dom';


function LogIn() {

  //sample for backend
  const userName='admin';
  const email='admin@gmail.com';
  const password='1234';

  const navigate = useNavigate();

  const [inputuserName,setInputuserName]=useState('');
  const [inputPassword,setInputPassword]=useState('');

  const loginHandler = async (e) => {
    e.preventDefault();
  
      if (inputuserName === '' || inputPassword === '') {
        alert('Your UserName or Password InputField is empty');
      } else if((userName==inputuserName || email==inputuserName)&&(password==inputPassword)) {
        navigate('/dashboard');
      }else{
        alert('Invalid Creditials')
      }
      
      ;
    
  };
  

  const signupHandler =()=>{
    navigate('/signup');
  }

  return (
    //main login container starts
    <div className="flex flex-col md:flex-row">
    {/* in desktop view we have 2 side(left,right containers)
          *left container contain background image for login page(hide in mobile version)
          *right container contain form fields for login page
    */}
    {/* left background container start */}
    <div className="hidden md:flex md:w-1/3 bg-cover bg-center h-screen w-full">
      <img src={Back} alt="" srcset="" className='w-full h-full object-cover'/>
    </div>
    {/* left background container end */}

    {/* right main container start */}
    <div className="md:w-2/3 p-6 grid grid-cols-7 md:grid-cols-4">
      {/* empty div for grid system */}
      <div></div>
      {/* login form container start */}
      <div className='col-span-5 md:col-span-2'>
      <div className='form-box flex flex-col items-center'>
      {/* logo image start */}
      <img src={logo} alt="" className='w-1/3 h-1/3'/>

      {/* Welcome header */}
      <h1 className="text-3xl font-semibold mb-4 mt-7">Welcome Back!</h1>
      {/* comapny slogan */}
      <p>Your one-stop shop for all your food delivery needs</p>
      <form className='w-full'>
        {/* email input floating table start */}
        <div className="mb-4 mt-5 relative">
        <input type="text" 
        id="username" 
        required 
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        value={inputuserName}
        onChange={(e)=>{setInputuserName(e.target.value)}}
        />
    <label for="username" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Username or Email</label>
        </div>
        {/* email input floating table end */}
        {/* password input floating table start */}
        <div className="mb-4 relative">
        <input type="text" 
              id="password" 
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                   border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 
                     focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " 
              value={inputPassword}
              onChange={(e)=>{setInputPassword(e.target.value)}}
              />
        <label for="password" required class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
        </div>
        {/* password input floating table end */}
        {/* log in button to submit the data */}
        <button
          className="w-full mt-3 bg-green-500 text-white font-semibold p-2 rounded-md hover:bg-green-600"
          type="submit"
          onClick={loginHandler}
          data-modal-target="popup-modal" data-modal-toggle="popup-modal"
          >
          Login
        </button>
        
      </form>
      {/* this hyperlink connect to sign up page */}
      <p className='mt-3'>Don't You have Account? <span><a href="/signup" className='text-bold font-medium text-green-400' onClick={signupHandler}>Sign Up</a></span></p>
      </div>
      </div>
    {/* login form container end */}
      <div></div>
    </div>
    {/* right main container end */}
  </div>
  //main login container end


  )
}

export default LogIn
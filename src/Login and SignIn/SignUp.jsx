import React, { useState } from 'react'
import Back from '../assets/logInImg.png'
import '../Login and SignIn/SignUp.css'
import { BrowserRouter, Routes, Route, Link, Outlet, Navigate,useNavigate } from 'react-router-dom';


import logo from '../assets/LogoPng.png'


function SignUp() {
  //used to navigate multipages using react dom
  const navigate = useNavigate();

  //useState use to get data from iput fields and use that data for validations
  const [userName,setUserName]=useState('');
  const [userEmail,setUserEmail]=useState('');
  const [pWord,setPWord]=useState('');
  const [rePWord,setRePWord]=useState('');

  //this function tigger when signup button clicked
    const signupHandler=()=>{
      //if any datafield was empty..this alert messege display on screen
        if(userName==''|| userEmail=='' || pWord=='' || rePWord==""){
          alert("Your Input Fields are Emplty")
        }
        //if password and re entered password are not matched, this error messege tiggered
        else if(pWord!=rePWord){
          alert("Both Passwords are mush be same!")
        }else{
          //if all done successfully navigate to login button
          //reason of this is when user add data to database as a new user, this process go as him as a exising user
          navigate('/')
        }
    }

    const loginHandler=()=>{
      navigate('/')
    }

  return (
    //main login container starts
    <div className="flex flex-col md:flex-row">
    {/* in desktop view we have 2 side(left,right containers)
          *left container contain background image for login page(hide in mobile version)
          *right container contain form fields for login page
    */}
    {/* left background container start */}
    <div className="background-div hidden md:flex md:w-1/3 bg-cover bg-center h-screen">
      {/* <img src={Back} alt="" srcset="" /> */}
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
      <h1 className="text-3xl font-semibold mb-4 mt-7 text-center">Create Your Foodie Profile!</h1>
      {/* comapny slogan */}
      <p className='text-center'>Join the Grub Up community and get your favorite food delivered to your door with just a few taps</p>
      <form className='w-full'>
        {/* username input floating table start */}
        <div className="mb-4 mt-5 relative">
        <input 
        type="text" 
        id="username" 
        required 
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder="" 
        value={userName}
        onChange={(e)=>{setUserName(e.target.value)}}
        />
    <label for="username" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Username</label>
        </div>
        {/* username input floating table end */}
        {/* email input floating table start */}
        <div className="mb-4 mt-5 relative">
        <input 
        type="text" 
        id="email" 
        required className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-non dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" "
        value={userEmail}
        onChange={(e)=>{setUserEmail(e.target.value)}}
        />
    <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
        </div>
        {/* email input floating table end */}
        {/* password input floating table start */}
        <div className="mb-4 relative">
        <input 
        type="text" 
        id="password" 
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        value={pWord}
        onChange={(e)=>{setPWord(e.target.value)}}
        />
        <label for="password" required class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
        </div>
        {/* password input floating table end */}
        {/* repassword input floating table start */}
        <div className="mb-4 relative">
        <input 
        type="text" 
        id="repassword" 
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" "
        value={rePWord}
        onChange={(e)=>{setRePWord(e.target.value)}}
        />
        <label for="repassword" required class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Re-Password</label>
        </div>
        {/* repassword input floating table end */}
        {/* log in button to submit the data */}
        <button
          className="w-full mt-3 bg-green-500 text-white font-semibold p-2 rounded-md hover:bg-green-600"
          type="submit"
          onClick={signupHandler}
          >
          Sign Up
        </button>
      </form>
      
      

      {/* this hyperlink connect to sign up page */}
      <p className='mt-3'>Already Member? <span><a href="" className='text-bold font-medium text-green-400' onClick={loginHandler}>Log In</a></span></p>
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

export default SignUp
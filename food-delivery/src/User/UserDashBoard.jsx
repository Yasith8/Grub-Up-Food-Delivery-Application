import React, { Fragment, useState } from 'react'
import Category from './Category';
import '../User/UserDashboard.css'

//import react router dom
import { useNavigate } from "react-router-dom";

//import image
import Logo from '../assets/WebIcon.png'
import profileImg from '../assets/profile.jpg'

//import icon
import { BiSolidBowlRice,BiSolidDrink,BiSearchAlt2} from "react-icons/bi";
import {GiTacos,GiCroissant,GiSushis} from "react-icons/gi";
import {FaPizzaSlice,FaHandHolding} from "react-icons/fa";
import {PiBeerBottleFill,PiHamburgerFill} from "react-icons/pi";
import {TbTruckDelivery} from "react-icons/tb";
import {LiaCertificateSolid} from "react-icons/lia";
import {IoMdSettings} from "react-icons/io";
import {FiLogOut} from "react-icons/fi";
import {MdOutlineNotificationsNone} from "react-icons/md";
import {BsCart3} from "react-icons/bs";
import Slider from './Slider';

//import images
import indian from '../assets/category/indian.jpg'
import burger from '../assets/category/burger.jpeg'
import drink from '../assets/category/drink.jpg'
import chinese from '../assets/category/chinese.jpg'
import europe from '../assets/category/europe.jpg'
import mexican from '../assets/category/mexican.jpg'
import pizza from '../assets/category/pizza.jpg'
import ProductCard from './ProductCard';



function UserDashBoard() {

  const category=[
    {icon:BiSolidBowlRice, name:"Indian",bg:indian},
    {icon:GiTacos,name:"Mexican",bg:mexican},
    {icon:GiCroissant,name:"Europian",bg:europe},
    {icon:GiSushis,name:"Chinese",bg:chinese},
    {icon:PiHamburgerFill,name:"Burger",bg:burger},
    {icon:FaPizzaSlice,name:"Pizza",bg:pizza},
    {icon:BiSolidDrink,name:"Bevarage",bg:drink}
  ];

  const service=[
    {icon:TbTruckDelivery,name:"Delivery"},
    {icon:FaHandHolding,name:"TakeAway"},
    {icon:LiaCertificateSolid,name:"Promotion"},
    {icon:IoMdSettings,name:"Settings"},
  ]

  const navigate =useNavigate();

  const logoutHandler=()=>{
    const needLogOut=confirm("Do you really need to Logout?");
    if(needLogOut){
      navigate('/')
    }
  }

  const [logP,setLogP]=useState(false);


  return (
    <div className='main-container flex'>
      {/* dashbord panal start */}
      <div className="panel-container  md:w-1/6 md:h-screen bg-[#323232] flex flex-col justify-between p-5 text-lg">
        <img src={Logo} alt="logo" className='md:w-[70px] md:h-[70px] md:mx-2' />
        <div className="category text-white">
          <h1 className='text-xl font-bold pb-4'>Category</h1>
          {category.map((e) => (
                <button id='btn' className='w-[150px] p-[2px] flex items-center cursor-pointer text-white border-2 border-transparent rounded-sm pb-1 hover:text-green-400 hover:border-green-400' key={e.name}><span className='pr-2'>{<e.icon />}</span>{e.name}</button>
                 ))}
        </div>
        <div className="service text-white">
        <h1 className='text-xl font-bold pb-4'>Service</h1>
          {service.map((e) => (
                <button id='btn' className='w-[150px] p-[2px] flex items-center cursor-pointer text-white border-2 border-transparent pb-1 hover:text-green-400 hover:border-green-400' key={e.name}><span className='pr-2'>{<e.icon />}</span>{e.name}</button>
                ))}
        </div>
        <button className='flex items-center justify-center text-white bg-green-500 w-[150px] p-2 rounded-lg' onClick={logoutHandler}>
        <FiLogOut/>
        <h1 className='pl-2 '>LogOut</h1>
        </button>
      </div>
      {/* dashbord panal end */}
      {/* user panal start */}
      <div className="dash-container md:w-5/6 md:h-screen bg-gray-200 flex flex-col">
        {/* search bar start */}
        <div className="search-bar h-[10%] px-7 w-full bg-white box-border flex items-center justify-between">
        <div class="relative ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              < BiSearchAlt2/>
            </div>
          <input type="text" id="email-address-icon" class="bg-white border border-gray-200 text-gray-900 text-sm rounded-sm focus:ring-green-500 focus:border-green-500 block w-[500px] pl-10 p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="search..."/>
        </div>
        <div className='flex pr-5 items-center'>
                    <button className='text-[30px] relative top-[7px] px-2'><MdOutlineNotificationsNone/><div className='bg-red-500 w-4 h-4 relative -top-8 left-4 rounded-2xl text-sm'>1</div></button>
                    <button className='text-[20px] px-6'><BsCart3/></button>
                   {/*  <button><img src={profileImg} className='w-9 h-9 rounded-full' /></button> */}


                    {/* Profile Navbar Start */}

                    <div class="relative inline-block text-left">
                          <div>
                            <button type="button" 
                            onClick={() => (logP===false)?setLogP(true):setLogP(false)}
                            class="w-full justify-center rounded-md bg-white  text-sm font-semibold text-gray-900  hover:bg-gray-50">
                                  <img src={profileImg} className='w-9 h-9 rounded-full' />   
                            </button>
                          </div>


                         <div class={`${(logP==true)?'':'hidden'} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                           <div class="py-1" role="none">
                           
                             <a href="#" class="text-gray-700 hover:bg-green-300 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                             <a href="#" class="text-gray-700 hover:bg-green-300 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                             <a href="#" class="text-gray-700 hover:bg-green-300 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                            <button type="submit" class="text-gray-700 hover:bg-green-300 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3" onClick={logoutHandler}>Sign out</button>
                             
                           </div>
                         </div>
                       </div>

                    {/* Profile Navbar end*/}
        </div>
        </div>
        {/* search bar end */}
        <div className="content-bar h-[90%] w-screen relative">
           <div className="category-slider h-[20%]">
            {/* slider start */}
            <Slider choice={category}/>
            {/* slider end */}
           </div>
           <div className="Product-items w-screen h-[80%]">
            <ProductCard/>
           </div>
           </div>
        </div>
        {/* user panal end */}
    </div>
  )
}

export default UserDashBoard
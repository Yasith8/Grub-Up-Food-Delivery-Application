import React from 'react'
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


function UserDashBoard() {

  const category=[
    {icon:BiSolidBowlRice, name:"Indian"},
    {icon:GiTacos,name:"Mexican"},
    {icon:GiCroissant,name:"Europian"},
    {icon:GiSushis,name:"Chinese"},
    {icon:PiHamburgerFill,name:"Burger"},
    {icon:FaPizzaSlice,name:"Pizza"},
    {icon:BiSolidDrink,name:"Bevarage"},
    {icon:PiBeerBottleFill,name:"Alcohol"}
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
        <div className='flex pr-5'>
                    <button className='text-[30px] relative top-[7px] px-2'><MdOutlineNotificationsNone/><div className='bg-red-500 w-4 h-4 relative -top-8 left-4 rounded-2xl text-sm'>1</div></button>
                    <button className='text-[20px] px-6'><BsCart3/></button>
                    {/* <button><img src={profileImg} className='w-9 h-9 rounded-full' /></button> */}

                    {/* test start */}
                    <div class="bg-white py-1 flex flex-col justify-center">
                         <div class="flex items-center justify-center p-1">
                              <div class=" relative inline-block text-left dropdown">
                                   <span class="rounded-md">
                                        <button className="inline-flex justify-center w-full px-1 py-1 rounded-lg text-sm font-medium 
                                                       leading-5 text-gray-200 transition duration-150 ease-in-out bg-white border
                                                        border-white hover:text-gray-500 focus:outline-none focus:border-green-300 
                                                        focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" 
                                                type="button" 
                                                aria-haspopup="true" 
                                                aria-expanded="true" 
                                                aria-controls="headlessui-menu-items-117">
                                                        <img src={profileImg} className='w-9 h-9 rounded-full' />
                                        </button>
                                   </span>
    <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
          <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                <div class="px-4 py-3">         
                       <p class="text-sm leading-5">Signed in as</p>
                       <p class="text-sm font-medium leading-5 text-gray-900 truncate">tom@example.com</p>
                </div>
          <div class="py-1">
                     <button className="text-gray-700 hover:bg-green-700 flex justify-between w-full px-4 py-2 text-sm leading-5   text-left"  role="menuitem" >Account settings</button>
                     <button className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5  hover:text-green-500 text-left"  role="menuitem" >Support</button>
                                <span role="menuitem" class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50" aria-disabled="true">Track Your Helth(soon)</span>
                     <button className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 hover:text-green-500  text-left"  role="menuitem" >License</button></div>
            <div className="py-1" onClick={logoutHandler}>
                     <button className="text-gray-700 hover:bg-green-500 flex justify-between w-full px-4 py-2 text-sm leading-5  text-left"  role="menuitem" onClick={logoutHandler} >Sign out</button></div>
            </div>
          </div>
    </div>
</div>              
</div>
                    {/* test end */}
                   
        </div>
        </div>
        {/* search bar end */}
        <div className="content-bar h-[90%] w-screen relative">
           
           </div>
        </div>
        {/* user panal end */}
    </div>
  )
}

export default UserDashBoard
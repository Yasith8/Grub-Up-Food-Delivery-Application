import React from 'react'
import Category from './Category';
import '../User/UserDashboard.css'

//import react router dom
import { useNavigate } from "react-router-dom";

//import image
import Logo from '../assets/WebIcon.png'

//import icon
import { BiSolidBowlRice,BiSolidDrink } from "react-icons/bi";
import {GiTacos,GiCroissant,GiSushis} from "react-icons/gi";
import {FaPizzaSlice,FaHandHolding} from "react-icons/fa";
import {PiBeerBottleFill,PiHamburgerFill} from "react-icons/pi";
import {TbTruckDelivery} from "react-icons/tb";
import {LiaCertificateSolid} from "react-icons/lia";
import {IoMdSettings} from "react-icons/io";
import {FiLogOut} from "react-icons/fi";


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
      <div className="dash-container md:w-5/6 md:h-screen bg-gray-200 flex flex-col">
        <div className="search-bar h-[10%] w-screen bg-white sticky">ddd</div>
        <div className="content-bar h-[90%] w-screen relative">
           
           </div>
        </div>
    </div>
  )
}

export default UserDashBoard
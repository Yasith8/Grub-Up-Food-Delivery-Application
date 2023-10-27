import React, { useState } from 'react'

import img from '../assets/food/indian/biriyani.png';

function ProductCard() {
    const[count,setCount]=useState(0);

    const incCountHandler=()=>{
        setCount(prevCount => prevCount + 1);
    }

    const decCountHandler=()=>{
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
        else{
            setCount(0);
        }
        
    }
  return (
    <div class="group my-10 flex w-[250px] h-[350px] max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img class="peer absolute top-0 right-0 h-full w-full object-cover" src={img} alt="product image" />
   
  </a>
  <div class="mt-4 px-5 pb-5">
    <a href="#">
      <h5 class="text-xl tracking-tight text-slate-900">Indian Biriyani</h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      {/* <p className='flex items-center justify-between'> */}
        <span class="text-3xl font-bold text-slate-900">Rs. 900</span>
        <div className='flex'>
            <button className='bg-green-900 w-5 h-5 text-white rounded-sm px-2' onClick={decCountHandler}>-</button>
            <h1 className='px-2'>{count}</h1>
            <button className='bg-green-900 w-5 h-5 text-white rounded-sm px-2' onClick={incCountHandler}>+</button>
        </div>
      {/* </p> */}
    </div>
    <a href="#" class="flex items-center justify-center rounded-md bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-green-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart</a>
    
  </div>
</div>

  )
}

export default ProductCard
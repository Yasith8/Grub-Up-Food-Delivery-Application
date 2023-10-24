import React from 'react'


import '../User/Slider.css'


function Slider(props) {
  return (
    <div className="m-8 flex items-center justify-between box-border pr-[260px]">
      {props.choice.map((e) => (
        <div className={`w-[150px] h-[80px] flex items-center justify-center bg-cover text-white font-bold text-xl shadow-lg rounded-md slide`} 
        key={e.name}
        style={{ backgroundImage: `url(${e.bg})`}}
        >
          <h1 className='shadow-2xl'>{e.name}</h1></div>
      ))}
  </div>
  )
}

export default Slider
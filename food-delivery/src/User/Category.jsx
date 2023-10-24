import React from 'react'

function Category(props) {
  return (
    <div className='bg-green-300 w-[100px] h-[100px]'>
        <h1>{props.dataL}</h1>
    </div>
  )
}

export default Category
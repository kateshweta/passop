import React from 'react'

const Footer = () =>  {
  return (
    <div className='bg-black text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
      

      <div className="logo font-bold text-white text-2xl " font-bold>
        <span className="text-green-500">&lt;</span>
        Pass
        <span className="text-green-500">OP&gt;</span>
      </div>
      <div className="flex">
        Created by Shweta Kate
      </div>
    </div>
  )
}

export default Footer

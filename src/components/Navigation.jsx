import React from 'react'

function Navigation() {
  return (
    <nav className = 'bg-purple-400 flex justify-between items-center px-20 h-20'>
        <div className = "logo" font-bold>Passop</div>
      <ul>
        <li className = 'flex gap-4'>
            <a className='hover:font-bold'href="#">Home</a>
            <a className='hover:font-bold'href="#">About Us</a>
            <a className='hover:font-bold'href="#">Services</a>
            <a className='hover:font-bold'href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

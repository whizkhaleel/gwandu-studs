import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <nav className='nav'>
        <a className='brand-name'>
            Gob16
        </a>
        <button className='harmburger'>
        <svg xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2">
            <path strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        </button>
        <div className='nav-menu'>
            <ul>
                <li>
                    <a href='/home'>Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
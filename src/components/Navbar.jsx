import React from 'react'
import kenny from '../assets/kenny.jpg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='flex justify-around '>
            <div>
                <img src={kenny} alt="division" className='h-[20px]'/>
            </div>
            <div>
                <Link to='/Employee' >Employee</Link>
                <Link to='/LeavePage' >LeavePage</Link>
                <Link to='/Register'>Register</Link>
                <Link to='/Manager'>Manager</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
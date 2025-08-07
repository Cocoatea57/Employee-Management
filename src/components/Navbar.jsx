import React from 'react'
import kenny from '../assets/kenny.jpg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='flex justify-around bg-blue-400 shadow-xl p-2 mx-2 '>
            <div>
                <p>FraNel company LTD</p>
            </div>
            <div className='flex gap-4'>
                <Link to='/Employee' >Employee</Link>
                <Link to='/LeavePage' >LeavePage</Link>
                <img src={kenny} alt="division" className='shadow-white shadow-2xl text-white w-[6px] h-[20px]'/>
                <Link to='/Register'>Register</Link>
                <Link to='/Manager'>Manager</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
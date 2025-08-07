import React from 'react'
import kenny from '../assets/kenny.jpg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='flex justify-around bg-blue-400 shadow-xl  p-2 '>
            <div>
                <marquee className='shadow-white shadow-xl border-t-1 border-white px-2'><strong>FraNel company LTD </strong></marquee>
            </div>
            <div className='flex gap-4 shadow-lg'>
                <Link to='/Employee' className='font-semibold shadow-white shadow-xl border px-2 border-white hover:bg-green-500'>Employees</Link>
                <img src={kenny} alt="division" className='shadow-white shadow-2xl text-white w-[5px] h-[30px]'/>
                <Link to='/LeavePage' className='font-semibold shadow-white shadow-xl border px-2 border-white hover:bg-green-500'>Request Leave</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
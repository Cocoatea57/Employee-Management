import React from 'react'
import kenny from '../assets/kenny.jpg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='flex justify-around bg-blue-400 shadow-xl p-2 mx-2 '>
            <div>
                <p className='shadow-white shadow-xl border-t-1 border-white'><strong>FraNel company LTD </strong></p>
            </div>
            <div className='flex gap-4 shadow-lg'>
                <Link to='/Employee' className='font-semibold shadow-white shadow-xl border px-2 border-white'>Employees</Link>
                <img src={kenny} alt="division" className='shadow-white shadow-2xl text-white w-[5px] h-[30px]'/>
                <Link to='/LeavePage' className='font-semibold shadow-white shadow-xl border px-2 border-white'>Request Leave</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
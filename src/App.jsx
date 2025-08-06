import React from 'react'
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Manager from './pages/Manager'
import LeavePage from './pages/LeavePage'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Employee from './pages/Employee'

function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/Employee' element={<Employee/>}/>
      <Route path='/Manager' element={<Manager/>}/>
      <Route path='/LeavePage' element={<LeavePage/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
   </Router>
  )
}

export default App
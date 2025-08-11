import React, { useState } from 'react'
import { v4 as uuid } from "uuid";

function Register({addNewEmployee}) {
  const[firstName, setFirstName] = useState('')
  const[lastName, setLastName]= useState('')
  const[email, setEmail] = useState('')
  const[role, setRole] =useState('')
  const[Salary, setSalary] = useState(0)
  const[image, setImage] = useState(null)
  const[preview, setPreview] = useState('')
  const[address,setAddress] = useState('')
  const[department,setDepartment] = useState('')
  const[age, setAge] = useState(0)

 function handleFName(e){
  setFirstName(e.target.value)
 }
  function handleLName(e){
  setLastName(e.target.value)
 }
 function handleEmail(e){
  setEmail(e.target.value)
 }
  function handleAge(e){
  setAge(e.target.value)
 }
  function handleRole(e){
  setRole(e.target.value)
 }
  function handleSalary(e){
  setSalary(e.target.value)
 }
  function handleAddress(e){
  setAddress(e.target.value)
 }
  function handleDepartment(e){
  setDepartment(e.target.value)
 }

  function handleImage(e){
  const file = (e.target.files[0])
    if(file){
      setImage(file)
      setPreview(URL.createObjectURL(file))
    }
 }

function handleSubmit(e){
  e.preventDefault()
  const newEmployee ={
    firstName: firstName,
    lastName: lastName,
    email: email,
    age: age,
    Salary: Salary,
    department: department,
    role: role,
    address: address,
    image:image,
    preview: preview,
    id: uuid()
  }
  addNewEmployee(newEmployee)
  console.log(newEmployee)
  setAddress('')
  setAge(0)
  setDepartment('')
  setEmail('')
  setFirstName('')
  setPreview('')
  setLastName('')
  setRole('')
  setSalary(0)
  setImage(null)

}

    
  return (
    <div className='border m-4 p-4 flex flex-col w-1/2'>
      <div className='text-center'>
        <h1>Add Employee</h1>
        <h6>Fill details</h6>
      </div>
      
      <div>
        
        <form onSubmit={handleSubmit} className='grid grid-cols-3 gap-4'>
          <div >
            <label htmlFor="">First Name</label>
            <input type="text" placeholder='Firstname' 
            value={firstName} name='firstname' onChange={handleFName} className='border' />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder='Lastname' 
            value={lastName} name='lastname' onChange={handleLName}
            className='border' />
          </div>
          <div>
            <label htmlFor="">Email address</label>
            <input type="email" placeholder='example@email.com' 
            value={email} name='email' onChange={handleEmail} className='border' />
          </div>
          <div>
            <label htmlFor="">Select Role</label>
            <input list='roles' placeholder='Select role' 
            value={role} name='role' onChange={handleRole} className='border px-2' />
            <datalist id='roles' >
                  <option value="Senior Developer"/>
                  <option value="Intermediate Developer"/>
                  <option value="Junior Developer"/>
            </datalist>

          </div>
          <div>
            <label htmlFor="">Department</label>
            <input list='department' placeholder='Select Department'
            value={department} name='department' onChange={handleDepartment} className='border px-2' />
            <datalist id='department'>
            <option value="Software"/>
            <option value="Sales"/>
            <option value="Finance"/>
            </datalist>
          </div>
          <div>
            <label htmlFor="">Salary</label>
            <input list="salary" type='number' placeholder='Select Salary'
            value={Salary} name='salary' onChange={handleSalary} className='border px-2'/>
            <datalist id='salary'>
              <option value="20000"/>
              <option value="30000"/>
              <option value="12000"/>
              <option value="40000"/>
              <option value="60000"/>
              <option value="25000"/>
              <option value="18000"/>
              <option value="15000"/>
            </datalist>
          </div>
          <div>
            <label htmlFor="">Employee Age</label>
            <input type="number" placeholder='Select Age'
            value={age} onChange={handleAge} name='age' className='border px-2'/>
          </div>
          <div>
            <label htmlFor="">Address</label>
            <input type="text" placeholder='Digital address'
            value={address} name='address' onChange={handleAddress} className=' border px-2'/>
          </div> 
          <div>
            <label htmlFor="">Add image</label>
            <input type="file" accept='image/*' key={preview} onChange={handleImage} className='border w-3/4'/>
          </div>
          <div>
            <button type='submit'>Add Employee</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
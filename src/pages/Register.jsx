import React from 'react'

function Register() {

    
  return (
    <div>
      <h1>Add Employee</h1>
      <div>
        <h6>Fill details</h6>
        <form action="">
          <div>
            <label htmlFor="">First Name</label>
            <input type="text" placeholder='Firstname' />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder='Lastname' />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='example@email.com' />
          </div>
          <div>
            <label htmlFor="">Role</label>
            <input list='roles' placeholder='Select role' />
            <datalist id='roles' >
                  <option value="Snr Dev">Senior Developer</option>
                  <option value="mid dev">Intermediate Dev</option>
                  <option value="jnr dev">Junior Dev</option>
            </datalist>

          </div>
          <div>
            n
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
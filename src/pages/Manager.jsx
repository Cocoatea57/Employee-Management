import React from 'react'
import Register from './Register'

function Manager({addNewEmployee}) {
  return (
    <div>
      <Register addNewEmployee={addNewEmployee} />
    </div>
  )
}

export default Manager
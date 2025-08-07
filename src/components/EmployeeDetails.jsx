import React from 'react'

const EmployeeDetails = ({details}) => {
  return (
    <>
      {/* first char styling */}
      <div className="flex items-center justify-center text-2xl text-amber-200 uppercase bg-purple-600 shadow-[0_0_0_4px_rgba(0,0,0,0.1)] font-semibold rounded-full size-12">
        {details.name.charAt(0)}
      </div>

      {/* employee details */}
      <div className="">
        <h1 className="text-green-900 font-bold text-xl">🧔🏻‍♂️{details.name}</h1>
        <h3 className="text-lg text-green-400">🤹🏻‍♂️{details.role}</h3>
      </div>
    </>
  );
}

export default EmployeeDetails
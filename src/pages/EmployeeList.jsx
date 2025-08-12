import React from "react";
import { Link } from "react-router-dom";
import useEmployeeStore from "../store/EmployeeStore";


function EmployeeList() {
  // The employees state from the store
  const { employees } = useEmployeeStore();

  return (
    <div className="">
      <h2 className="text-center ">Employee List</h2>
      
        {employees.map((employee) => (
          <div key={employee.id} className="flex gap-4 shadow-2xl shadow-green-300 w-[400px] m-4 rounded-lg">
            <div className="flex justify-center items-center m-2 ">
                <img src={employee.preview} alt=""  className="w-[150px]"/>
            </div>
            <div className="flex flex-col gap-4 justify-center items-left">
              
             <h1>Name: {employee.firstName}</h1>
             
             <h4>Role: {employee.role}</h4>
             <p>Department: {employee.department}</p>
              <Link to={`/employees/${employee.id}`}>
                <button className="text-blue-400"> view Details </button> 
              </Link>
            </div>
            
            


          </div>
        ))}
      
    </div>
  );
}

export default EmployeeList;

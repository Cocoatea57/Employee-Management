import React from "react";
import { useState } from "react";
import EmployeeDetails from "../components/EmployeeDetails";
import EmployeeList from "../components/EmployeeList";
function Employee({ employees, addNewEmployee, editEmployee, deleteEmployee }) {
  return (
    <div className="flex gap-2">
      <EmployeeList employees={employees} addNewEmployee={addNewEmployee} />
      <EmployeeDetails
        employees={employees}
        editEmployee={editEmployee}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
}

export default Employee;

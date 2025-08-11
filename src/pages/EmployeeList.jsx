import React from "react";
import { Link } from "react-router-dom";
import useEmployeeStore from "../store/EmployeeStore";

function EmployeeList() {
  // The employees state from the store
  const { employees } = useEmployeeStore();

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employees/${employee.id}`}>
              <p>
                {employee.firstName} {employee.lastName}
              </p>
              <p>{employee.role}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;

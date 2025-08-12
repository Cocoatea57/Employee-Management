import React from "react";
import { useParams } from "react-router-dom";
import useEmployeeStore from "../store/EmployeeStore";

function EmployeeDetails() {
  // employee list from zustand store
  const employees = useEmployeeStore((state) => state.employees);

  // Use the useParams hook to get the 'id' from the URL
  const { id } = useParams();

  // Find the employee with the matching id
  const employee = employees.find((emp) => emp.id === id);

  // If no employee is found, show a message
  if (!employee) {
    return <h2>Employee not found!</h2>;
  }

  // Display the employee's details
  return (
    <div>
      <h2>Employee Details</h2>
      {/* profile image  */}
      <div>{employee.preview}</div>
      <p>
        <strong>Full Name:</strong> {employee.firstName} {employee.lastName}
      </p>
      <div className="flex">
        {/* Contact Details info */}
        <div>
          <p>
            <strong>Email:</strong> {employee.email}
          </p>
          <p>
            <strong>Age:</strong> {age.email}
          </p>
          <p>
            <strong>Address:</strong> {address.email}
          </p>
        </div>

        {/* Job info */}
        <div>
          <p>
            <strong>Role:</strong> {employee.role}
          </p>

          <p>
            <strong>Department:</strong> {employee.department}
          </p>
          <p>
            <strong>Salary:</strong> ${employee.salary}
          </p>
          <p>
            <strong>Hire Date:</strong> {employee.hireDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;

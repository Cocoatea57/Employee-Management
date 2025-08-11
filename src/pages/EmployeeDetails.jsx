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
      <p>
        <strong>Full Name:</strong> {employee.firstName} {employee.lastName}
      </p>
      <p>
        <strong>Role:</strong> {employee.role}
      </p>
      <p>
        <strong>Email:</strong> {employee.email}
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
  );
}

export default EmployeeDetails;

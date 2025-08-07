import React from "react";
import { v4 as uuid } from "uuid";
import EmployeeDetails from "../components/EmployeeDetails";
import EmployeeList from "../components/EmployeeList";
function Employee() {
  const [employees, setEmployees] = useState([
    {
      firstName: "Frank",
      lastName: "Owusu",
      email: "frankowusu@email.com",
      age: 25,
      address: "St Palm Avenue",
      department: "Software",
      role: "Senior Dev",
      salary: 15000,
      hireDate: new Date().toLocaleDateString(),
      id: uuid(),
    },
  ]);

  //  Register Employee
  const addNewEmployee = (newEmployee) => {
    setUsers([...employees, { ...newEmployee, id: uuid() }]);
  };

  // Edit Employee
  const editEmployee = (employeeId, newDetails) => {
    const updated = employees.map((employee) =>
      employee.id === employeeId ? { ...employee, ...newDetails } : employee
    );
    setEmployees(updated);
  };
  return (
    <>
      {/* left pane - register employee + employee list */}
      <div>
        {/* search and sort functionality */}

        {/* employee list */}
        <EmployeeList/>
      </div>

      {/* right pane - employee detail */}
      <EmployeeDetails/>
    </>
  );
}

export default Employee;

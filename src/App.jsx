import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Manager from "./pages/Manager";
import LeavePage from "./pages/LeavePage";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Employee from "./pages/Employee";

function App() {
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
    setEmployees([...employees, { ...newEmployee, id: uuid() }]);
  };

  // Edit Employee
  const editEmployee = (employeeId, newDetails) => {
    const updated = employees.map((employee) =>
      employee.id === employeeId ? { ...employee, ...newDetails } : employee
    );
    setEmployees(updated);
  };

  //  Delete Employee
  const deleteEmployee = (employeeId) => {
    const updated = employees.filter((employee) => employee.id !== employeeId);
    setEmployees(updated);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/Employee"
          element={
            <Employee
              employees={employees}
              editEmployee={editEmployee}
              deleteEmployee={deleteEmployee}
            />
          }
        />
        <Route path="/" element={<Manager />} />
        <Route path="/LeavePage" element={<LeavePage />} />
        <Route path="/Register" element={<Register addNewEmployee={addNewEmployee} employees={employees}/>} />
      </Routes>
    </Router>
  );
}

export default App;

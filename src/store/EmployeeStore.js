// src/store/employeeStore.js
import { create } from "zustand";
import { v4 as uuid } from "uuid";

// Define the initial state and actions in the store
const useEmployeeStore = create((set) => ({
  // Initial state of employee
  employees: [
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
  ],

  // Add new employee
  addNewEmployee: (newEmployee) =>
    set((state) => ({
      employees: [
        ...state.employees,
        {
          ...newEmployee,
          id: uuid(),
          hireDate: new Date().toLocaleDateString(),
        },
      ],
    })),

  // edit employee
  editEmployee: (employeeId, newDetails) =>
    set((state) => ({
      employees: state.employees.map((employee) =>
        employee.id === employeeId ? { ...employee, ...newDetails } : employee
      ),
    })),

  // delete employee
  deleteEmployee: (employeeId) =>
    set((state) => ({
      employees: state.employees.filter(
        (employee) => employee.id !== employeeId
      ),
    })),
}));

export default useEmployeeStore;

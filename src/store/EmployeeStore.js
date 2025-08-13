// src/store/employeeStore.js
import { create } from "zustand";
import { v4 as uuid } from "uuid";
import dummy from "../assets/dummy.jpg";

// initial states and actions in the store
const useEmployeeStore = create((set) => ({
  // Initial state of employees
  employees: [
    {
      preview: dummy,
      firstName: "Frank",
      lastName: "Owusu",
      email: "frankowusu@email.com",
      age: 25,
      address: "St Palm Avenue",
      department: "Software",
      role: "Senior Developer",
      salary: 15000,
      hireDate: new Date().toLocaleDateString(),
      id: uuid(),
    },
    {
      preview: dummy,
      firstName: "Nelson",
      lastName: "Target",
      email: "nel.target@email.com",
      age: 30,
      address: "123 Main Street",
      department: "Finance",
      role: "Accountant",
      salary: 12000,
      hireDate: new Date().toLocaleDateString(),
      id: uuid(),
    },
    {
      preview: dummy,
      firstName: "Sharon",
      lastName: "Serwah",
      email: "sha.serwah@email.com",
      age: 22,
      address: "456 Oak Avenue",
      department: "Sales",
      role: "Senior Sales Manager",
      salary: 13500,
      hireDate: new Date().toLocaleDateString(),
      id: uuid(),
    },
    {
      preview: dummy,
      firstName: "Natasha",
      lastName: "Ama",
      email: "nat.ama@email.com",
      age: 35,
      address: "789 Pine Road",
      department: "HR",
      role: "HR Director",
      salary: 8500,
      hireDate: new Date().toLocaleDateString(),
      id: uuid(),
    },
    {
      preview: dummy,
      firstName: "Nel",
      lastName: "Frank",
      email: "nel.cocoa@email.com",
      age: 28,
      address: "321 Elm Street",
      department: "Software",
      role: "Intermediate Developer",
      salary: 11000,
      hireDate: new Date().toLocaleDateString(),
      id: uuid(),
    },
  ],

  // initial employee selected
  currentEmployee: null,

  // Current employee selected
  setCurrentEmployee: (employee) => set({ currentEmployee: employee }),

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
      currentEmployee: null,
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

// src/store/employeeStore.js
import { create } from "zustand";
import { v4 as uuid } from "uuid";
import dummy from "../assets/dummy.jpg";
import josh from '../assets/josh.jpg'
import flora from '../assets/flora.jpg'
import foster from '../assets/foster.jpg'
import samg from '../assets/samg.jpg'
import wbrandt from '../assets/WBrandt.jpg'

// initial states and actions in the store
const useEmployeeStore = create((set) => ({
  // Initial state of employees
  employees: [
    {
      preview: josh,
      firstName: "Joshua",
      lastName: "Doe",
      email: "joshuadoe@gmail.com",
      age: 25,
      address: "St Palm Avenue",
      department: "Software",
      role: "Senior Developer",
      salary: 20000 ,
      hireDate: new Date().toLocaleDateString(),
      id: uuid(),
    },
    {
      preview: samg,
      firstName: "Sam",
      lastName: "General",
      email: "samgeneral@email.com",
      age: 24,
      address: "123 Main Street",
      department: "Finance",
      role: "Accountant",
      salary: 12000,
      hireDate: new Date().toLocaleDateString(),
      id: uuid(),
    },
    {
      preview: foster,
      firstName: "Foster",
      lastName: "Frimpong",
      email: "fosterfrimpong@email.com",
      age: 28,
      address: "456 Oak Avenue",
      department: "Sales",
      role: "Senior Sales Manager",
      salary: 13500,
      hireDate: new Date().toLocaleDateString(),
      id: uuid(),
    },
    {
      preview: flora,
      firstName: "Flora",
      lastName: "Dadie",
      email: "flowerflora@email.com",
      age: 27,
      address: "789 Pine Road",
      department: "HR",
      role: "HR Director",
      salary: 8500,
      hireDate: new Date().toLocaleDateString(),
      id: uuid(),
    },
    {
      preview: wbrandt,
      firstName: "Williams",
      lastName: "brandt",
      email: "wbrandt@email.com",
      age: 25,
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

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import LeavePage from "./pages/LeavePage";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import EmployeeList from "./pages/EmployeeList";
import EmployeeDetails from "./pages/EmployeeDetails";
import SalaryChart from "./components/SalaryChart";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
        <Route path="/leave-page" element={<LeavePage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

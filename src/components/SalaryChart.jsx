import React from "react";
import useEmployeeStore from "../store/EmployeeStore";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalaryChart = () => {
  // Get employees directly from Zustand
  const employees = useEmployeeStore((state) => state.employees);

  // Group employees by department & sum salaries
  const departmentSalaryMap = {};
  employees.forEach((emp) => {
    if (departmentSalaryMap[emp.department]) {
      departmentSalaryMap[emp.department] += emp.salary;
    } else {
      departmentSalaryMap[emp.department] = emp.salary;
    }
  });

  // chart labels & values
  const labels = Object.keys(departmentSalaryMap);
  const salaryData = Object.values(departmentSalaryMap);

  // Chart data & options
  const data = {
    labels,
    datasets: [
      {
        label: "Total Salary ($)",
        data: salaryData,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Salary per Department" },
    },
  };

  return <Bar data={data} options={options} />;
};

export default SalaryChart;

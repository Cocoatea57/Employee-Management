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

  // Get departments and salaries
  const labels = Object.keys(departmentSalaryMap);
  const salaryData = Object.values(departmentSalaryMap);

  // Generate distinct colors for each department
  const generateColors = (count) => {
    const colors = [
      "rgba(54, 162, 235, 0.6)", // Blue
      "rgba(255, 99, 132, 0.6)", // Red
      "rgba(75, 192, 192, 0.6)", // Teal
      "rgba(255, 159, 64, 0.6)", // Orange
      "rgba(153, 102, 255, 0.6)", // Purple
      "rgba(255, 205, 86, 0.6)", // Yellow
      "rgba(201, 203, 207, 0.6)", // Gray
      "rgba(0, 128, 0, 0.6)", // Green
      "rgba(128, 0, 128, 0.6)", // Deep Purple
      "rgba(255, 0, 0, 0.6)", // Bright Red
    ];

    // Return colors cycling through the palette
    return Array.from({ length: count }, (_, i) => colors[i % colors.length]);
  };

  const backgroundColors = generateColors(labels.length);

  const data = {
    labels,
    datasets: [
      {
        label: "Total Salary ($)",
        data: salaryData,
        backgroundColor: backgroundColors,
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          generateLabels: (chart) => {
            const datasets = chart.data.datasets;
            return datasets[0].data.map((data, i) => ({
              text: chart.data.labels[i],
              fillStyle: datasets[0].backgroundColor[i],
              hidden: false,
              index: i,
            }));
          },
        },
      },
      title: { display: true, text: "Salary per Department" },
    },
  };

  return <Bar data={data} options={options} />;
};

export default SalaryChart;

import React from "react";
import { Link } from "react-router-dom";
import useEmployeeStore from "../store/EmployeeStore";
import SalaryChart from "../components/SalaryChart";
import { BriefcaseBusiness, Landmark, Mail, ArrowRight } from "lucide-react";

function EmployeeList() {
  const { employees } = useEmployeeStore();

  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {/* Employee list */}
      <div className="w-full md:w-1/2">
        <h2 className="text-center font-bold text-xl italic mb-4 text-slate-700 animate-bounce">
          Employees
        </h2>

        <div className="flex flex-col items-center">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="flex gap-4 shadow-lg rounded-lg mb-4 w-full max-w-md p-4"
            >
              <div className="flex justify-center items-center">
                <img
                  src={employee.preview}
                  alt={employee.firstName}
                  className="w-[80px] h-[80px] object-cover rounded-full"
                />
              </div>

              <div className="flex-1">
                <h1 className="font-bold text-lg">
                  {employee.firstName} {employee.lastName}
                </h1>

                {/* role - department */}
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center text-sm">
                    <BriefcaseBusiness size={16} className="mr-1" />
                    <span>{employee.role}</span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <div className="flex items-center text-sm">
                    <Landmark size={16} className="mr-1" />
                    <span>{employee.department}</span>
                  </div>
                </div>

                {/* email */}
                <a
                  href={`mailto:${employee.email}`}
                  className="flex items-center mt-1 text-sm hover:text-blue-500 transition-colors"
                >
                  <Mail size={16} className="mr-1" />
                  <span>{employee.email}</span>
                </a>

                {/* View Details button */}
                <div className="mt-2 flex justify-end">
                  <Link
                    to={`/employees/${employee.id}`}
                    className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    <span className="mr-1 text-sm font-medium">
                      View Details
                    </span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Salary chart */}
      <div className="w-full md:w-1/2">
        <h2 className="text-center font-bold text-xl italic mb-4 text-slate-700">
          Salary Distribution
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="h-[300px]">
            <SalaryChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;

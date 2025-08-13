import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useEmployeeStore from "../store/EmployeeStore";
import { Dialog } from "@headlessui/react";
import {
  User,
  Mail,
  Home,
  Calendar,
  Briefcase,
  Landmark,
  DollarSign,
  Cake,
  Edit,
  Trash2,
  ArrowRight,
} from "lucide-react";

function EmployeeDetails() {
  const employees = useEmployeeStore((state) => state.employees);
  const currentEmployee = useEmployeeStore((state) => state.currentEmployee);
  const setCurrentEmployee = useEmployeeStore(
    (state) => state.setCurrentEmployee
  );
  const editEmployee = useEmployeeStore((state) => state.editEmployee);
  const deleteEmployee = useEmployeeStore((state) => state.deleteEmployee);

  // State variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState(0);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [address, setAddress] = useState("");
  const [department, setDepartment] = useState("");
  const [age, setAge] = useState(0);
  const [open, setOpen] = useState(false);

  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === id);

  useEffect(() => {
    if (currentEmployee) {
      setFirstName(currentEmployee.firstName);
      setLastName(currentEmployee.lastName);
      setAddress(currentEmployee.address);
      setDepartment(currentEmployee.department);
      setEmail(currentEmployee.email);
      setRole(currentEmployee.role);
      setAge(currentEmployee.age);
      setSalary(currentEmployee.salary);
      setPreview(currentEmployee.preview);
      setImage(currentEmployee.image);
    }
  }, [currentEmployee]);

  // Handler functions
  function handleFName(e) {
    setFirstName(e.target.value);
  }
  function handleLName(e) {
    setLastName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleAge(e) {
    setAge(e.target.value);
  }
  function handleRole(e) {
    setRole(e.target.value);
  }
  function handleSalary(e) {
    setSalary(e.target.value);
  }
  function handleAddress(e) {
    setAddress(e.target.value);
  }
  function handleDepartment(e) {
    setDepartment(e.target.value);
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    editEmployee(currentEmployee.id, {
      firstName,
      lastName,
      email,
      role,
      salary,
      address,
      department,
      age: Number(age),
      preview,
      image,
    });
    setOpen(false);
  }

  if (!employee) {
    return <h2>Employee not found!</h2>;
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center p-4">
      <h2 className="mb-6 text-2xl font-bold flex items-center gap-2">
        <User size={24} /> Employee Details
      </h2>

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Profile Header */}
        <div className="bg-indigo-500 text-white p-6 text-center">
          <div className="flex justify-center">
            <img
              src={employee.preview}
              alt="profile"
              className="w-40 h-40 rounded-full border-4 border-white shadow-xl"
            />
          </div>
          <h1 className="text-2xl font-bold mt-4">
            {employee.firstName} {employee.lastName}
          </h1>
          <p className="text-indigo-200 flex items-center justify-center gap-1">
            <Briefcase size={16} /> {employee.role}
          </p>
        </div>

        {/* Details Container */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 border-b pb-2">
              <User size={18} /> Personal Information
            </h3>

            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="text-indigo-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{employee.email}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Cake size={18} className="text-indigo-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Age</p>
                  <p className="font-medium">{employee.age} years</p>
                </div>
              </div>

              <div className="flex items-center">
                <Home size={18} className="text-indigo-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">{employee.address}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Calendar size={18} className="text-indigo-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Hire Date</p>
                  <p className="font-medium">{employee.hireDate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Job Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 border-b pb-2">
              <Briefcase size={18} /> Job Information
            </h3>

            <div className="space-y-3">
              <div className="flex items-center">
                <Briefcase size={18} className="text-indigo-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="font-medium">{employee.role}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Landmark size={18} className="text-indigo-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Department</p>
                  <p className="font-medium">{employee.department}</p>
                </div>
              </div>

              <div className="flex items-center">
                <DollarSign size={18} className="text-indigo-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Salary</p>
                  <p className="font-medium">${employee.salary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center p-6 gap-4 border-t">
          <button
            onClick={() => deleteEmployee(employee.id)}
            className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
          >
            <Trash2 size={18} /> Remove Employee
          </button>

          <button
            onClick={() => {
              setCurrentEmployee(employee);
              setOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
          >
            <Edit size={18} /> Edit Details
          </button>
        </div>
      </div>

      {/* Edit Employee Modal */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl max-h-[90vh] overflow-y-auto">
            <Dialog.Title className="text-xl font-bold mb-4 flex items-center gap-2">
              <Edit size={20} /> Edit Employee Details
            </Dialog.Title>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <input
                    value={firstName}
                    onChange={handleFName}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <input
                    value={lastName}
                    onChange={handleLName}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Role</label>
                  <input
                    value={role}
                    onChange={handleRole}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Salary
                  </label>
                  <input
                    type="number"
                    value={salary}
                    onChange={handleSalary}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Department
                  </label>
                  <input
                    value={department}
                    onChange={handleDepartment}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Age</label>
                  <input
                    type="number"
                    value={age}
                    onChange={handleAge}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Profile Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="w-full p-2 border rounded"
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="mt-2 w-24 h-24 object-cover rounded border"
                  />
                )}
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition flex items-center gap-1"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-1"
                >
                  Save Changes <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

export default EmployeeDetails;

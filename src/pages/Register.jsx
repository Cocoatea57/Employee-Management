import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom"
import useEmployeeStore from "../store/EmployeeStore";

function Register() {
  // addNewEmployee from the store
  const { addNewEmployee } = useEmployeeStore();

  //useState for form data
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
    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      age: age,
      Salary: salary,
      department: department,
      role: role,
      address: address,
      image: image,
      preview: preview,
      id: uuid(),
    };

    addNewEmployee(newEmployee);
    console.log(newEmployee);

    // Reset form
    setAddress("");
    setAge(0);
    setDepartment("");
    setEmail("");
    setFirstName("");
    setPreview("");
    setLastName("");
    setRole("");
    setSalary(0);
    setImage(null);

    //alert 
    alert('Employee added successfully ✅')
  }

  return (
    <div className=" flex flex-col justify-center items-center  p-2 gap-2 h-screen">
      <div className=" p-2 flex flex-col flex-wrap justify-center items-center w-1/3 p-2 gap-2  shadow-2xl shadow-blue-800 rounded-lg">
      <div className="text-center">
        <h1 className="text-2xl m-2 bg-white shadow-md w-full p-2">Add Employee</h1>
        <h6 className="text-lg m-2">Fill details</h6>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="flex flex-col flex-wrap gap-2">
          <div>
            <label htmlFor="">First Name</label>
            <input
              type="text"
              placeholder="Firstname"
              value={firstName}
              name="firstname"
              onChange={handleFName}
              className="bg-white m-1 p-1 shadow-xl "
            />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              placeholder="Lastname"
              value={lastName}
              name="lastname"
              onChange={handleLName}
              className="bg-white m-1 p-1 shadow-xl"
            />
          </div>
          <div>
            <label htmlFor="">Email address</label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              name="email"
              onChange={handleEmail}
              className="bg-white m-1 p-1 shadow-xl"
            />
          </div>
          <div>
            <label htmlFor="">Select Role</label>
            <input
              list="roles"
              placeholder="Select role"
              value={role}
              name="role"
              onChange={handleRole}
              className="bg-white m-1 p-1 px-2 shadow-xl"
            />
            <datalist id="roles">
              <option value="Senior Developer" />
              <option value="Intermediate Developer" />
              <option value="Junior Developer" />
            </datalist>
          </div>
          <div>
            <label htmlFor="">Department</label>
            <input
              list="department"
              placeholder="Select Department"
              value={department}
              name="department"
              onChange={handleDepartment}
              className="bg-white m-1 p-1 px-2 shadow-xl"
            />
            <datalist id="department">
              <option value="Software" />
              <option value="Sales" />
              <option value="Finance" />
            </datalist>
          </div>
          <div>
            <label htmlFor="">Salary</label>
            <input
              list="salary"
              type="number"
              placeholder="Select Salary"
              value={salary}
              name="salary"
              onChange={handleSalary}
              className="bg-white m-1 p-1 px-2 shadow-xl"
            />
            <datalist id="salary">
              <option value="20000" />
              <option value="30000" />
              <option value="12000" />
              <option value="40000" />
              <option value="60000" />
              <option value="25000" />
              <option value="18000" />
              <option value="15000" />
            </datalist>
          </div>
          <div>
            <label htmlFor="">Age</label>
            <input
              type="number"
              placeholder="Select Age"
              value={age}
              onChange={handleAge}
              name="age"
              className="bg-white m-1 p-1 px-2 shadow-xl"
            />
          </div>
          <div>
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Digital address"
              value={address}
              name="address"
              onChange={handleAddress}
              className=" bg-white m-1 p-1 px-2 shadow-xl"
            />
          </div>
          <div>
            <label htmlFor="">Add image</label>
            <input
              type="file"
              accept="image/*"
              key={preview}
              onChange={handleImage}
              className="bg-white m-1 p-1 file:p-1 file:rounded-lg  file:shadow-lg file:mr-2 file:border shadow-xl hover:file:cursor-pointer transition"
            />
          </div>
          <div>
            <button type="submit" className="p-1 bg-blue-500 shadow-2xl hover:shadow-white hover:scale-110 transition-transform duration-200 rounded-md">Add Employee</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Register;

import {React,useState,  useEffect } from "react";
import { useParams } from "react-router-dom";
import useEmployeeStore from "../store/EmployeeStore";

function EmployeeDetails() {
  // employee list from zustand store
  const employees = useEmployeeStore((state) => state.employees);
  const currentEmployee = useEmployeeStore((state) => state.currentEmployee)
  const editEmployee = useEmployeeStore((state) => state.editEmployee)
  const deleteEmployee = useEmployeeStore((state) => state.deleteEmployee)
  const addEmployee = useEmployeeStore ((state) => state.addEmployee)

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
   const [open,setOpen] = useState(false)
  // Use the useParams hook to get the 'id' from the URL
  const { id } = useParams();

  useEffect(()=>{
    if(currentEmployee){
      setFirstName(currentEmployee.firstName)
      setLastName(currentEmployee.lastName)
      setAddress(currentEmployee.address)
      setDepartment(currentEmployee.department)
      setEmail(currentEmployee.email)
      setRole(currentEmployee.role)
      setAge(currentEmployee.age)
      setSalary(currentEmployee.salary)
      setPreview(currentEmployee.preview)
      setImage(currentEmployee.image)


    }
  },[currentEmployee])

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
   
  function handleSubmit(e){
    e.preventDefault()
    //replace new info with current one
    addEmployee(currentEmployee.id, {...currentEmployee,email, firstName,lastName,address,preview,image,age,role,department})
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
  }
  // Find the employee with the matching id
  const employee = employees.find((emp) => emp.id === id);

  // If no employee is found, show a message
  if (!employee) {
    return <h2>Employee not found!</h2>;
  }

  // Display the employee's details
  return (
    <div className="flex flex-col h-screen justify-center items-center">
       <h2 className="m-6">Employee Details</h2>
      <div className=" w-[500px] h-[510px] flex flex-col items-center gap-6 shadow-2xl" > 
        <div className="flex items-center justify-center">
          <img src={employee.preview} alt="image" className="shadow-2xl w-[310px] h-[300px] rounded-full" />
        </div>
      
        <div className=" shadow-lg p-2 w-[70%]">
          <p>
          <strong>Full Name:</strong> <span className="shadow-xl shadow-white"> {employee.firstName} {employee.lastName}</span>
        </p>
        <p>
          <strong>Role:</strong> {employee.role}
        </p>
        <p>
          <strong>Email:</strong> {employee.email}
        </p>
        <p>
          <strong>Department:</strong> {employee.department}
        </p>
        <p>
          <strong>Salary:</strong> ${employee.salary}
        </p>
        <p>
          <strong>Hired Date:</strong> {employee.hireDate}
        </p>
        </div>
        <button className="absolute left-230 bg-blue-300 shadow-xl shadow-red-500 
        rounded-lg hover:scale-110 transition-transform font-bold cursor-pointer text-red-500 m-2 p-1" onClick={()=> deleteEmployee(employee.id)}>Remove</button>
        <button className="absolute left-130 bg-green-300 shadow-xl shadow-green-600 
        rounded-lg hover:scale-110 transition-transform font-bold cursor-pointer text-black m-2 p-1" onClick={()=> currentEmployee(employee)}>Edit Details</button>
      </div>
    </div>
  );
}

export default EmployeeDetails;

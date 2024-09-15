import { useState } from "react";
import "../index.css";
import Employee from "../components/Employee";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "../components/AddEmplyee";
import EditEmployee from "../components/EditEmployee";

function Employees() {
  const showEmployees = true;
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Richard",
      role: "Team Lead",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      id: 2,
      name: "Hela",
      role: "UI Designer",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
      id: 3,
      name: "Hary",
      role: "Developer",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    },
    {
      id: 4,
      name: "Michelle",
      role: "Tester",
      img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg",
    },
    {
      id: 5,
      name: "Pfiser",
      role: "DB Admin",
      img: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg",
    },
    {
      id: 6,
      name: "Edith",
      role: "DevOps",
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    },
  ]);

  const updateEmployee = (id, newName, newRole) => {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  };

  const newEmployee = (name, role, img) => {
    const newEmployee = {
      id: uuidv4(),
      name,
      role,
      img,
    };
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div className="App bg-gray-300 min-h-screen">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap py-2">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  name={employee.name}
                  role={employee.role}
                  id={employee.id}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default Employees;

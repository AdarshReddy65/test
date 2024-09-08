import { useState } from "react";
import "./index.css";
import Employee from "./components/Employee";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("No Role!");
  const [employees, setEmployees] = useState([
    {
      name: "Richard",
      role: "Team Lead",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      name: "Hela",
      role: "UI Designer",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
      name: "Hary",
      role: "Developer",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    },
    {
      name: "Michelle",
      role: "Tester",
      img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg",
    },
    {
      name: "Pfiser",
      role: "DB Admin",
      img: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg",
    },
    {
      name: "Edith",
      role: "DevOps",
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    },
  ]);
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap">
            {employees.map((employee) => (
              <Employee
								key={uuidv4()}
                name={employee.name}
                role={employee.role}
                img={employee.img}
              />
            ))}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;

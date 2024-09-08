import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';

function App() {
	const [ role, setRole ] = useState('No Role!');
	const showEmployees = true;
	return (
		<div className="App bg-red-300">
			{showEmployees ? (
				<>
					<input type='text' onChange={(e)=>{
						setRole(e.target.value)
					}}/>
					<Employee name="Adarsh" role="CEO"/>
					<Employee name="Aditya" role={role}/>
					<Employee name="Ashish"/>
				</>
			) : (
				<p>You cannot see the employees</p>
			)}
		</div>
	);
}

export default App;

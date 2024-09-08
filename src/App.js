import './App.css';
import Employee from './components/Employee';

function App() {
	console.log('we are about to list the employees!');
	const showEmployees = true;
	return (
		<div className="App">
			{console.log('inside the return')}
			{showEmployees ? (
				<>
					<Employee name="Adarsh" role="CEO"/>
					<Employee name="Aditya"/>
					<Employee name="Ashish"/>
				</>
			) : (
				<p>You cannot see the employees</p>
			)}
		</div>
	);
}

export default App;

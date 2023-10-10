import {useState} from "react";

export default function PersonalInfo({callback}) {
	const [inputs, setInputs] = useState({firstName: "John", lastName: "Doe", phone: "123-456-7890", email: "john.doe@gmail.com", fax: "+1-123-456-7890"});
	
	function handleChange(designator, info) {
		if(designator === 0) {
			setInputs({...inputs, firstName: `${info}`});
		} else if(designator === 1) {
			setInputs({...inputs, lastName: `${info}`});
		} else if(designator === 2) {
			setInputs({...inputs, phone: `${info}`});
		} else if(designator === 3) {
			setInputs({...inputs, email: `${info}`});
		} else {
			setInputs({...inputs});
		}
	}

	function callCallback() {
		callback(inputs);
	}

	return (
		<div className="personalInfoContainer">
			<div className="inputContainer">
				<label className="inputLabel" htmlFor="firstNameInput">First Name:  </label>
				<input className="personalInfoInput" id="firstNameInput" placeholder={inputs.firstName} type="text"
					onChange={(event) => handleChange(0, event.target.value)}></input>
			</div>
			<div className="inputContainer">
				<label className="inputLabel" htmlFor="lastNameInput">Last Name:  </label>
				<input className="personalInfoInput" id="lastNameInput" placeholder={inputs.lastName} type="text"
					onChange={(event) => handleChange(1, event.target.value)}></input>
			</div>
			<div className="inputContainer">
				<label className="inputLabel" htmlFor="phoneNumberInput">Phone Number:  </label>
				<input className="personalInfoInput" id="phoneNumberInput" placeholder={inputs.phone} type="tel"
					onChange={(event) => handleChange(2, event.target.value)}></input>
			</div>
			<div className="inputContainer">
				<label className="inputLabel" htmlFor="emailInput">Email:  </label>
				<input className="personalInfoInput" id="emailInput" placeholder={inputs.email} type="email"
					onChange={(event) => handleChange(3, event.target.value)}></input>
			</div>
			<button type="button" onClick={callCallback}>Submit</button>
		</div>
	);
}

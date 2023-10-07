import { useState } from "react";

export default function Education({callback}) {
	const [inputs, setInputs] = useState({schoolName: "University Name", major: "Computer Science", startDate: "August 2021", endDate: "Present"});

	function callCallback() {
		callback(inputs);
	}

	function changeInputs(designator, info) {
		if(designator === 0) {
			setInputs({...inputs, schoolName: `${info}`});
		} else if(designator === 1) {
			setInputs({...inputs, major: `${info}`});
		} else if(designator === 2) {
			setInputs({...inputs, startDate: `${info}`});
		} else if(designator === 3) {
			setInputs({...inputs, endDate: `${info}`});
		} else {
			setInputs({...inputs});
		}
	}

	return (
		<div className="educationContainer">
			<div className="educationInputContainer">
				<label className="educationLabel" htmlFor="schoolNameInput">School Name:  </label>
				<input className="educationInput" id="schoolNameInput" placeholder={inputs.schoolName} type="text"
					onChange={(event) => changeInputs(0, event.target.value)}></input>
			</div>
			<div className="educationInputContainer">
				<label className="educationLabel" htmlFor="majorInput">Major:  </label>
				<input className="educationInput" id="majorInput" placeholder={inputs.major} type="text"
					onChange={(event) => changeInputs(1, event.target.value)}></input>
			</div>
			<div className="educationInputContainer">
				<label className="educationLabel" htmlFor="startDateInput">Date You Started Attending:  </label>
				<input className="educationInput" id="startDateInput" placeholder={inputs.startDate} type="text"
					onChange={(event) => changeInputs(2, event.target.value)}></input>
			</div>
			<div className="educationInputContainer">
				<label className="educationLabel" htmlFor="endDateInput">Date You Finished Attending:  </label>
				<input className="educationInput" id="endDateInput" placeholder={inputs.endDate} type="text"
					onChange={(event) => changeInputs(3, event.target.value)}></input>
			</div>
			<button type="button" className="submitButton" onClick={callCallback}>Submit</button>
		</div>
	);
}

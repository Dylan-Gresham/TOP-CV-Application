import { useState } from "react";

export default function WorkExperience({callback}) {
	const [inputs, setInputs] = useState({company: 'Example Inc.', position: 'Fullstack Developer', responsibilities: [
			'Creating and Maintaining Example Inc.\'s website'], startDate: "June 2025", endDate: "Present"});

	let responsibilitiesArr = inputs.responsibilities;

	function callCallback() {
		callback(inputs);
	}

	function changeInputs(designator, info) {
		if(designator === 0) {
			setInputs({...inputs, company: `${info}`});
		} else if(designator === 1) {
			setInputs({...inputs, position: `${info}`});
		} else if(designator === 2) {
			responsibilitiesArr[0] = `${info}`;
			setInputs({...inputs, responsibilities: responsibilitiesArr});
		} else if(designator === 3) {
			setInputs({...inputs, startDate: `${info}`});
		} else if(designator === 4) {
			setInputs({...inputs, endDate: `${info}`});
		} else {
			setInputs({...inputs});
		}
	}

	function appendToResponsibilities(info) {
		responsibilitiesArr[responsibilitiesArr.length] = info;
		setInputs({...inputs, responsibilities: responsibilitiesArr});
	}

	function removeResponsibility(num) {
		if(num > -1) {
			responsibilitiesArr.splice(num, 1);
			newSelectorNum--;
			setInputs({...inputs, responsibilities: responsibilitiesArr});
		} else {
			setInputs({...inputs});
		}
	}

	let newSelectorNum = 1;

	return (
		<div className="workExperienceContainer">
			<div className="workExperienceInputContainer">
				<label className="workExperienceLabel" htmlFor="companyInput">Company Name:  </label>
				<input className="workExperienceInput" id="companyInput" placeholder={inputs.company} type="text"
					onChange={(event) => changeInputs(0, event.target.value)}></input>	
			</div>
			<div className="workExperienceInputContainer">
				<label className="workExperienceLabel" htmlFor="positionInput">Position:  </label>
				<input className="workExperienceInput" id="positionInput" placeholder={inputs.position} type="text"
					onChange={(event) => changeInputs(1, event.target.value)}></input>
			</div>
			<div className="workExperienceInputContainer responsibilitiesDiv">
				<label className="workExperienceLabel" htmlFor="responsibilitiesInput">Responsibility 1:  </label>
				<input className="workExperienceInput" id="responsibilitiesInput" placeholder={inputs.responsibilities} type="text"
					onChange={(event) => changeInputs(2, event.target.value)}></input>
				<button className="innerFunctionButton" type="button" onClick={(event) => {
					const containerDiv = document.querySelector('.responsibilitiesDiv');
					const newLabel = document.createElement('label');
					newLabel.setAttribute('for', `responsibilitiesInput${newSelectorNum}`);
					newLabel.classList.add('workExperienceLabel');
					newLabel.textContent = `Responsibility ${newSelectorNum + 1}:  `;
					const newInput = document.createElement('input');
					newInput.id = `responsibilities${newSelectorNum++}`;
					newInput.classList.add('workExperienceInput');
					newInput.setAttribute('type', 'text');
					newInput.setAttribute('placeholder', inputs.responsibilities[0]);
					const addResponsibilityButton = document.createElement('button');
					addResponsibilityButton.classList.add('addButton');
					addResponsibilityButton.addEventListener('click', (event) => {
						appendToResponsibilities(newInput.value);
						event.stopPropagation();
					});
					addResponsibilityButton.textContent = 'Add';
					const removeButton = document.createElement('button');
					removeButton.classList.add('innerFunctionButton');
					removeButton.addEventListener('click', (event) => {
						removeResponsibility(newSelectorNum - 1);
						event.stopPropagation();
					});
					removeButton.textContent = 'Remove';
					containerDiv.append(newLabel, newInput, addResponsibilityButton, removeButton);
					event.stopPropagation();
					}}>Add Another Responsibility</button>
				<button className="innerFunctionButton" type="button" onClick={(event) => {
					removeResponsibility(0);
					event.stopPropagation();
				}}>Remove</button>
			</div>
			<div className="workExperienceInputContainer">
				<label className="workExperienceLabel" htmlFor="startDateInput">Start Date:  </label>
				<input className="workExperienceInput" id="startDateInput" placeholder={inputs.startDate} type="text"
					onChange={(event) => changeInputs(3, event.target.value)}></input>
			</div>
			<div className="workExperienceInputContainer">
				<label className="workExperienceLabel" htmlFor="endDateInput">End Date:  </label>
				<input className="workExperienceInput" id="endDateInput" placeholder={inputs.endDate} type="text"
					onChange={(event) => changeInputs(4, event.target.value)}></input>
			</div>
			<button className="submitButton" type="button" onClick={callCallback}>Submit</button>
		</div>
	);
}

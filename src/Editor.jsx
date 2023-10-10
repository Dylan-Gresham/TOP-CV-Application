import {useState} from "react";
import PersonalInfo from "./PersonalInfo.jsx";
import Education from "./Education.jsx";
import WorkExperience from "./WorkExperience.jsx";

export default function Editor() {
	const inputs = {
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		fax: '',
		schoolName: '',
		major: '',
		sStartDate: '',
		sEndDate: '',
		company: '',
		position: '',
		responsibilities: [],
		startDate: '',
		endDate: ''
	};
	const [previewInputs, setPreviewInputs] = useState(inputs)

	function changePreviewPersonalInputs(childProps) {
		setPreviewInputs({...previewInputs, firstName: childProps.firstName, lastName: childProps.lastName, phone: childProps.phone, email: childProps.email, fax: childProps.fax});
	}

	function changePreviewEducationInputs(childProps) {
		setPreviewInputs({...previewInputs, schoolName: childProps.schoolName, major: childProps.major, sStartDate: childProps.startDate, sEndDate: childProps.endDate});
	}

	function changePreviewWorkExperienceInputs(childProps) {
		setPreviewInputs({...previewInputs, company: childProps.company, position: childProps.position, responsibilities: childProps.responsibilities, startDate: childProps.startDate, endDate: childProps.endDate});
	}

	return (
		<div className="editor">
			<PersonalInfo callback={changePreviewPersonalInputs}/>
			<Education callback={changePreviewEducationInputs}/>
			<WorkExperience callback={changePreviewWorkExperienceInputs}/>
		</div>
	);
}

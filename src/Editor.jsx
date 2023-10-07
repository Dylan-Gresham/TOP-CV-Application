import { useState } from "react";
import PersonalInfo from "./PersonalInfo.jsx";
import Education from "./Education.jsx";
import WorkExperience from "./WorkExperience.jsx";

export default function Editor() {
	const [previewPersonalInputs, setPreviewPersonalInputs] = useState({firstName: '', lastName: '', phone: '', email: '', fax: ''});
	const [previewEducationInputs, setPreviewEduactionInputs] = useState({schoolName: '', major: '', startDate: '', endDate: ''});
	const [previewWorkExperienceInputs, setPreviewWorkExperienceInputs] = useState({company: '', position: '', reponsibilities: [], startDate: '', endDate: ''});

	function changePreviewPersonalInputs(childProps) {
		setPreviewPersonalInputs({...previewPersonalInputs, firstName: childProps.firstName, lastName: childProps.lastName, phone: childProps.phone, email: childProps.email, fax: childProps.fax});
	}

	function changePreviewEducationInputs(childProps) {
		setPreviewEduactionInputs({...previewEducationInputs, schoolName: childProps.schoolName, major: childProps.major, startDate: childProps.startDate, endDate: childProps.endDate});
	}

	function changePreviewWorkExperienceInputs(childProps) {
		setPreviewWorkExperienceInputs({...previewWorkExperienceInputs, company: childProps.company, position: childProps.position, responsibilities: childProps.responsibilities, startDate: childProps.startDate, endDate: childProps.endDate});
	}

	return (
		<div className="editor">
			<PersonalInfo callback={changePreviewPersonalInputs}/>
			<Education callback={changePreviewEducationInputs}/>
			<WorkExperience callback={changePreviewWorkExperienceInputs}/>
		</div>
	);
}

import { useState } from "react";
import PersonalInfo from "./PersonalInfo.jsx";
import Education from "./Education.jsx";
import WorkExperience from "./WorkExperience.jsx";

export default function Editor() {
	const [previewPersonalInputs, setPreviewPersonalInputs] = useState({firstName: '', lastName: '', phone: '', email: '', fax: ''});

	function changePreviewPersonalInputs(childProps) {
		console.log(childProps);
		setPreviewPersonalInputs({...previewPersonalInputs, firstName: childProps.firstName, lastName: childProps.lastName, phone: childProps.phone, email: childProps.email, fax: childProps.fax});
	}

	return (
		<div className="editor">
			<PersonalInfo callback={changePreviewPersonalInputs}/>
			<Education />
			<WorkExperience />
		</div>
	);
}

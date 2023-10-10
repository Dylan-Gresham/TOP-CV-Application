import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Preview from "./Preview.jsx";
import Education from "./Education.jsx";
import PersonalInfo from "./PersonalInfo.jsx";
import WorkExperience from "./WorkExperience.jsx";
import {useState} from "react";
import './App.css'

function App() {
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
	const [previewInputs, setPreviewInputs] = useState(inputs);

	function handlePersonalInfoChange(childProps) {
		setPreviewInputs({...previewInputs, firstName: childProps.firstName, lastName: childProps.lastName, phone: childProps.phone, email: childProps.email, fax: childProps.fax});
	}

	function handleEducationChange(childProps) {
		setPreviewInputs({...previewInputs, schoolName: childProps.schoolName, major: childProps.major, sStartDate: childProps.startDate, sEndDate: childProps.endDate});
	}

	function handleWorkExperienceChange(childProps) {
		setPreviewInputs({...previewInputs, company: childProps.company, position: childProps.position, responsibilities: childProps.responsibilities, startDate: childProps.startDate, endDate: childProps.endDate});
	}

	console.log(previewInputs);

	return (
		<>
			<Header />
			<PersonalInfo callback={handlePersonalInfoChange} />
			<Education callback={handleEducationChange} />
			<WorkExperience callback={handleWorkExperienceChange} />
			<Preview props={previewInputs} />
			<Footer />
		</>
	);
}

export default App

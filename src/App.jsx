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
	const [showPreview, setShowPreview] = useState(false);

	function handleShowPreview() {
		if(showPreview === false) {
			setShowPreview(true);
		} else {
			setShowPreview(false);
		}
	}

	function handlePersonalInfoChange(childProps) {
		setPreviewInputs({...previewInputs, firstName: childProps.firstName, lastName: childProps.lastName, phone: childProps.phone, email: childProps.email});
	}

	function handleEducationChange(childProps) {
		setPreviewInputs({...previewInputs, schoolName: childProps.schoolName, major: childProps.major, sStartDate: childProps.startDate, sEndDate: childProps.endDate});
	}

	function handleWorkExperienceChange(childProps) {
		setPreviewInputs({...previewInputs, company: childProps.company, position: childProps.position, responsibilities: childProps.responsibilities, startDate: childProps.startDate, endDate: childProps.endDate});
	}

	if(showPreview) {
		return (
			<div className="mainContainerWithPreview">
				<button className="showPreviewButton" type="button" onClick={handleShowPreview}>Go Back to Editor</button>
				<Preview {...previewInputs} />
			</div>
		);
	} else {
		return (
			<div className="mainContainer">
				<Header />
				<PersonalInfo callback={handlePersonalInfoChange} />
				<Education callback={handleEducationChange} />
				<WorkExperience callback={handleWorkExperienceChange} />
				<button className="showPreviewButton" type="button" onClick={handleShowPreview}>Show Preview</button>
				<Footer />
			</div>
		);
	}
}

export default App

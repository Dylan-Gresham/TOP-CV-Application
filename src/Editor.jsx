import PersonalInfo from "./PersonalInfo.jsx";
import Education from "./Education.jsx";
import WorkExperience from "./WorkExperience.jsx";

export default function Editor() {
	return (
		<div className="editor">
			<PersonalInfo />
			<Education />
			<WorkExperience />
		</div>
	);
}

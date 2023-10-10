export default function Preview(props) {
	let responsibilitiesStr = '';
	if(props.responsibilities !== undefined && props.responsibilities.length > 0) {
		props.responsibilities.forEach((str) => {
			responsibilitiesStr += `${str}, `;
		});
	}
	responsibilitiesStr = responsibilitiesStr.slice(0, responsibilitiesStr.length - 2);

	return (
		<div className="previewContainer">
			<h1 className="nameTitle">{props.firstName + ' ' + props.lastName}</h1>
			<div className="section">
				<h2 className="sectionHeading">Work Experience</h2>
				<h3 className="subTitle">{props.position + ' at ' + props.company}</h3>
				<p className="desscription">{`${props.startDate} --> ${props.endDate}`}</p>
				<p className="description">{`${responsibilitiesStr}`}</p>
			</div>
			<div className="section">
				<h2 className="sectionHeading">Education</h2>
				<h3 className="subTitle">{props.schoolName}</h3>
				<p className="description"><b>{props.major}</b>{` Started: ${props.sStartDate} --> ${props.sEndDate}`}</p>
			</div>
			<div className="section">
				<h2 className="sectionHeading">Reach Me At:</h2>
				<div className="innerContact">
					<h4>By Phone:</h4>
					<p>{` ${props.phone}`}</p>
				</div>
				<div className="innerContact">
					<h4>By Email:</h4>
					<p>{` ${props.email}`}</p>
				</div>
			</div>
		</div>
	);
}

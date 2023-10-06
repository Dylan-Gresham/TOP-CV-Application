export default function PersonalInfo() {
	return (
		<div className="personalInfoContainer">
			<div className="inputContainer">
				<label>First Name:  </label>
				<input placeholder="John"></input>
			</div>
			<div className="inputContainer">
				<label>Last Name:  </label>
				<input placeholder="Doe"></input>
			</div>
			<div className="inputContainer">
				<label>Phone Number:  </label>
				<input placeholder="123-456-7890"></input>
			</div>
			<div className="inputContainer">
				<label>Email:  </label>
				<input placeholder="john.doe@gmail.com"></input>
			</div>
			<div className="inputContainer">
				<label>Fax:  </label>
				<input placeholder="+1-123-456-7890"></input>
			</div>
		</div>
	);
}

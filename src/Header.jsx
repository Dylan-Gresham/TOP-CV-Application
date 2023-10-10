import Icon from "@mdi/react";
import {mdiFileAccount} from "@mdi/js";

export default function Header() {

	return (
		<div className="headerContainer">
			<h3 className="headerHeader"><span className="iconSpan"><Icon className="icon" path={mdiFileAccount} title="Logo" size={1}></Icon></span>{"Insert your information into the boxes and hit submit to generate an example resume!"}</h3>
		</div>
	);
}

import Icon from "@mdi/react";
import { mdiFileAccount } from "@mdi/js";

export default function Header() {

	return (
		<div className="headerContainer">
			<Icon path={mdiFileAccount} title="Logo" size={1}></Icon>
			<h3>{"Insert your information into the boxes and hit submit to generate an example resume!"}</h3>
		</div>
	);
}

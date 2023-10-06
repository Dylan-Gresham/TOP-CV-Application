import { useState } from 'react';
import Header from "./Header.jsx";
import Editor from "./Editor.jsx";
import Preview from "./Preview.jsx";
import './App.css'

function App() {
	return (
		<>
			<Header />
			<Editor />
			<Preview />
		</>
	);
}

export default App

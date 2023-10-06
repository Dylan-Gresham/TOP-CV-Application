import { useState } from 'react';
import Header from "./Header.jsx";
import Editor from "./Editor.jsx";
import Preview from "./Preview.jsx";
import Footer from "./Footer.jsx";
import './App.css'

function App() {
	return (
		<>
			<Header />
			<Editor />
			<Preview />
			<Footer />
		</>
	);
}

export default App

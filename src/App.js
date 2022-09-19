import "./App.css";
import React, { useState } from "react";

function App() {
	const [sehariMakan, setSehariMakan] = useState(0);
	return (
		<div>
			<div>
				<h1>Saya sehari makan {sehariMakan} kali</h1>
				<button onClick={() => setSehariMakan((prev) => prev + 1)}>tambah</button>
				{sehariMakan === 0 ? <button disabled></button> : <button onClick={() => setSehariMakan((prev) => prev - 1)}>kurang</button>}
			</div>
		</div>
	);
}

export default App;

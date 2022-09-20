import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
	const [sehariMakan, setSehariMakan] = useState(0);
	const [namaMakanan, setNamaMakanan] = useState("");

	useEffect(() => {
		if (sehariMakan > 2) {
			setNamaMakanan("Nasgor");
		} else {
			setNamaMakanan("sate");
		}
	}, [sehariMakan]);

	return (
		<div>
			<div>
				<h2>Saya Makan: {namaMakanan}</h2>
				<h1>Saya sehari makan {sehariMakan} kali</h1>
				<button onClick={() => setSehariMakan(sehariMakan + 1)}>tambah</button>
				{sehariMakan === 0 ? <button disabled></button> : <button onClick={() => setSehariMakan((prev) => prev - 1)}>kurang</button>}
			</div>
		</div>
	);
}

export default App;

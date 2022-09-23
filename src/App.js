import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
	const [sehariMakan, setSehariMakan] = useState(0);
	const [namaMakanan, setNamaMakanan] = useState("");
	const [username, setUsername] = useState("");
	const [isUpdate, setIsUpdate] = useState(false);

	useEffect(() => {
		if (sehariMakan > 2) {
			setNamaMakanan("Nasgor");
		} else {
			setNamaMakanan("sate");
		}
	}, [sehariMakan]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/1")
			.then((response) => response.json())
			.then((json) => {
				setUsername(json.username);
			});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("https://jsonplaceholder.typicode.com/users/1", {
			method: "PUT",
			body: JSON.stringify({
				username: "name",
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then((response) => response.json())
			.then((json) => {
				setIsUpdate(true);
			});
	};
	useEffect(() => {
		if (isUpdate) {
			alert("change name successfull");
			setIsUpdate(false);
		}
	}, [isUpdate]);

	return (
		<div>
			<div style={{ padding: "50px" }}>
				<h2>Saya Makan: {namaMakanan}</h2>
				<h1>Saya sehari makan {sehariMakan} kali</h1>
				<button onClick={() => setSehariMakan(sehariMakan + 1)}>tambah</button>
				{sehariMakan === 0 ? (
					<button disabled></button>
				) : (
					<button style={{ marginLeft: "10px" }} onClick={() => setSehariMakan((prev) => prev - 1)}>
						kurang
					</button>
				)}
				<h2>username : {username}</h2>
			</div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input type="text" placeholder="change username" name="username" onChange={(e) => setUsername(e.target.value)} />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default App;

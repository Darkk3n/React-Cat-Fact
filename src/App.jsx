import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [fact, setFact] = useState(null);

	const getRandomFact = () => {
		fetch("https://catfact.ninja/fact")
			.then((res) => res.json())
			.then((data) => setFact(data.fact));
	};

	useEffect(getRandomFact, []);

	return (
		<main>
			<h1>Random Cat Fact App</h1>
			<h2>{fact}</h2>
		</main>
	);
}

export default App;

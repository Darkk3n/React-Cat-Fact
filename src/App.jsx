import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [fact, setFact] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

	const getRandomFact = () => {
		fetch("https://catfact.ninja/fact")
			.then((res) => res.json())
			.then((data) => setFact(data.fact));
	};

	useEffect(getRandomFact, []);

	useEffect(() => {
		if (!fact) return;
		const threeFirstWords = fact.split(" ", 3).join(" ");
		//Seems like  the 2nd API is not working
		fetch(
			`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
		)
			.then((res) => res.json())
			.then((response) => {
				const { url } = response;
				setImageUrl(url);
			});
	}, [fact]);

	return (
		<main>
			<h1>Random Cat Fact App</h1>
			<button onClick={getRandomFact}>Refresh Fact</button>
			{fact && <p>{fact}</p>}
			{imageUrl && (
				<img
					src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
					alt={`Image that came from the first three words from the first API`}
				/>
			)}
		</main>
	);
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { getRandomFact } from "./services/facts";

function App() {
	const [fact, setFact] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

	const handleClick = async () => {
		const newFact = await getRandomFact();
		setFact(newFact);
	};

	useEffect(() => {
		handleClick().then((newFact) => setFact(newFact));
		//This is another option but it's the same as the previous line
		// handleClick().then(setFact());
	}, []);

	useEffect(() => {
		if (!fact) return;
		const threeFirstWords = fact.split(" ", 3).join(" ");
		fetch(
			`${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWords}?size=50&color=red&json=true`
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
			<button onClick={handleClick}>Refresh Fact</button>
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

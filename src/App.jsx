import { useEffect, useState } from "react";
import "./App.css";
import { useCatImage } from "./hooks/useCatImage";
import { getRandomFact } from "./services/facts";

function App() {
	const [fact, setFact] = useState("");
	const { imageUrl } = useCatImage({ fact });
	const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

	useEffect(() => {
		handleClick().then((newFact) => setFact(newFact));
		//This is another option but it's the same as the previous line
		// handleClick().then(setFact());
	}, []);

	const handleClick = async () => {
		const newFact = await getRandomFact();
		setFact(newFact);
	};

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

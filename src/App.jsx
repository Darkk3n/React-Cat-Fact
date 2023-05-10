import "./App.css";
import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";

function App() {
	const { fact, refreshFact } = useCatFact();
	const { imageUrl } = useCatImage({ fact });

	const handleClick = () => {
		refreshFact();
	};

	return (
		<main>
			<h1>Random Cat Fact App</h1>
			<button onClick={handleClick}>Refresh Fact</button>
			{fact && <p>{fact}</p>}
			{imageUrl && (
				<img
					src={imageUrl}
					alt={`Image that came from the first three words from the first API`}
				/>
			)}
		</main>
	);
}

export default App;

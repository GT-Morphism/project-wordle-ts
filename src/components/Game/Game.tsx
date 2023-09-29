import GuessInput from "@/components/GuessInput";
import GuessResults from "@/components/GuessResults";
import { sample } from "@/utils";
import { WORDS } from "@/data";
import { useState } from "react";
import type { TGuess } from "@/types";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log(`%c The answer: ${answer}`, "color: green");

const Game = () => {
	const [guessResults, setGuessResults] = useState<TGuess[]>([]);

	return (
		<>
			<GuessResults guessResults={guessResults} answer={answer} />
			<GuessInput
				guessResults={guessResults}
				setGuessResults={setGuessResults}
			/>
		</>
	);
};

export default Game;

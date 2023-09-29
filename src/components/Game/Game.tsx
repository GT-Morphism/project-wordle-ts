import GuessInput from "@/components/GuessInput";
import GuessResults from "@/components/GuessResults";
import Banner from "./Banner";
import { sample } from "@/utils";
import { WORDS } from "@/data";
import { useState } from "react";
import type { TGameEndStatus, TGuess } from "@/types";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log(`%c The answer: ${answer}`, "color: green");

const Game = () => {
	const [guessResults, setGuessResults] = useState<TGuess[]>([]);
	const [gameEndStatus, setGameEndStatus] = useState<
		TGameEndStatus | undefined
	>(undefined);

	return (
		<>
			{gameEndStatus && (
				<Banner
					gameEndStatus={gameEndStatus}
					numberOfGuesses={guessResults.length}
					answer={answer}
				/>
			)}
			<GuessResults guessResults={guessResults} answer={answer} />
			<GuessInput
				guessResults={guessResults}
				setGuessResults={setGuessResults}
				gameEndeStatus={gameEndStatus}
				setGameEndStatus={setGameEndStatus}
				answer={answer}
			/>
		</>
	);
};

export default Game;

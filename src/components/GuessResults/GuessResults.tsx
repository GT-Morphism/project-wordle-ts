import type { TGuess } from "@/types";
import { NUM_OF_GUESSES_ALLOWED } from "@/constants";
import { createDummyArray } from "@/utils";
import Guess from "./Guess";
import { checkGuess } from "@/game-helpers";

type GuessResultsProps = {
	guessResults: TGuess[];
	answer: string;
};

const GuessResults = ({ guessResults, answer }: GuessResultsProps) => {
	const dummyArrayToCreateGrid: number[] = createDummyArray(
		NUM_OF_GUESSES_ALLOWED
	);

	return (
		<div className="guess-results">
			{dummyArrayToCreateGrid.map((i) => (
				<Guess
					key={i}
					userGuessArray={checkGuess(guessResults[i]?.content, answer)}
				/>
			))}
		</div>
	);
};

export default GuessResults;

import type { TGuess } from "@/types";
import { ARRAY_OF_EMPTY_STRINGS, NUM_OF_GUESSES_ALLOWED } from "@/constants";
import { createDummyArray } from "@/utils";
import Guess from "./Guess";

type GuessResultsProps = {
	guessResults: TGuess[];
};

const GuessResults = ({ guessResults }: GuessResultsProps) => {
	const dummyArrayToCreateGrid: number[] = createDummyArray(
		NUM_OF_GUESSES_ALLOWED
	);

	return (
		<div className="guess-results">
			{dummyArrayToCreateGrid.map((i) => (
				<Guess
					key={i}
					userGuessArray={
						guessResults[i]?.content.split("") || ARRAY_OF_EMPTY_STRINGS
					}
				/>
			))}
		</div>
	);
};

export default GuessResults;

import type { Guess } from "@/types";

type GuessResultsProps = {
	guessResults: Guess[];
};

const GuessResults = ({ guessResults }: GuessResultsProps) => {
	return (
		<div className="guess-results">
			{guessResults.length > 0 &&
				guessResults.map((guess) => (
					<p key={guess.id} className="guess">
						{guess.content}
					</p>
				))}
		</div>
	);
};

export default GuessResults;

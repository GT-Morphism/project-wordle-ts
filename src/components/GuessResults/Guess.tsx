import { ARRAY_OF_EMPTY_STRINGS } from "@/constants";
import type { TCheckedGuess } from "@/types";

type GuessProps = {
	userGuessArray: TCheckedGuess[] | null;
};

const Guess = ({ userGuessArray }: GuessProps) => {
	if (!userGuessArray) {
		userGuessArray = ARRAY_OF_EMPTY_STRINGS.map((emptyString) => ({
			letter: emptyString,
			status: null,
		}));
	}

	return (
		<p className="guess">
			{userGuessArray.map(({ letter, status }, i) => (
				<span key={i} className={`${status ? `cell ${status}` : "cell"}`}>
					{letter}
				</span>
			))}
		</p>
	);
};

export default Guess;

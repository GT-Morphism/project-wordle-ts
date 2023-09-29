import type { TGameEndStatus, TGuess } from "@/types";
import { sample } from "@/utils";
import { WORDS } from "@/data";

type RestartGameProps = {
	setGuessResults: React.Dispatch<React.SetStateAction<TGuess[]>>;
	setGameEndStatus: React.Dispatch<
		React.SetStateAction<TGameEndStatus | undefined>
	>;
	setAnswer: React.Dispatch<React.SetStateAction<string>>;
};

const RestartGame = ({
	setGuessResults,
	setGameEndStatus,
	setAnswer,
}: RestartGameProps) => {
	function handleClick() {
		setGuessResults([]);
		setGameEndStatus(undefined);
		setAnswer(sample(WORDS));
	}

	return (
		<div className="restart-game">
			<button type="button" onClick={handleClick}>
				Restart
			</button>
		</div>
	);
};

export default RestartGame;

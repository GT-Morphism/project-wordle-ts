import GuessInput from "@/components/GuessInput";
import GuessResults from "@/components/GuessResults";
import Banner from "./Banner";
import RestartGame from "./RestartGame";
import { sample } from "@/utils";
import { WORDS } from "@/data";
import { useEffect, useState } from "react";
import type { TGameEndStatus, TGuess } from "@/types";

const Game = () => {
	const [answer, setAnswer] = useState<string>(sample(WORDS));
	const [guessResults, setGuessResults] = useState<TGuess[]>([]);
	const [gameEndStatus, setGameEndStatus] = useState<
		TGameEndStatus | undefined
	>(undefined);

	useEffect(() => {
		console.log(`%c The answer: ${answer}`, "color: green");
	}, [answer]);

	return (
		<>
			{gameEndStatus && (
				<>
					<RestartGame
						setGuessResults={setGuessResults}
						setGameEndStatus={setGameEndStatus}
						setAnswer={setAnswer}
					/>
					<Banner
						gameEndStatus={gameEndStatus}
						numberOfGuesses={guessResults.length}
						answer={answer}
					/>
				</>
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

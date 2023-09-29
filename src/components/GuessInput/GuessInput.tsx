import { useState } from "react";
import type { TGameEndStatus, TGuess } from "@/types";
import { NUM_OF_GUESSES_ALLOWED } from "@/constants";

type GuessInputProps = {
	guessResults: TGuess[];
	answer: string;
	gameEndeStatus: TGameEndStatus | undefined;
	setGuessResults: React.Dispatch<React.SetStateAction<TGuess[]>>;
	setGameEndStatus: React.Dispatch<
		React.SetStateAction<TGameEndStatus | undefined>
	>;
};

const GuessInput = ({
	guessResults,
	answer,
	gameEndeStatus,
	setGuessResults,
	setGameEndStatus,
}: GuessInputProps) => {
	const [guessInput, setGuessInput] = useState("");

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		console.log(`%c Your Input: ${guessInput}`, "color: yellow");

		const newGuess: TGuess = {
			content: guessInput,
			id: crypto.randomUUID(),
		};

		setGuessResults([...guessResults, newGuess]);
		handleSetGameEndStatus();
		setGuessInput("");
	}

	function handleSetGameEndStatus() {
		if (guessInput == answer) {
			setGameEndStatus("happy");
		} else if (guessResults.length == NUM_OF_GUESSES_ALLOWED - 1) {
			setGameEndStatus("sad");
		}
	}

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				required={true}
				disabled={gameEndeStatus != undefined}
				pattern="[a-zA-Z]{5}"
				title="You need to type 5 characters."
				minLength={5}
				maxLength={5}
				value={guessInput}
				onChange={(event) => {
					setGuessInput(event.target.value.toUpperCase());
				}}
			/>
		</form>
	);
};

export const RANDOM = "random";

export default GuessInput;

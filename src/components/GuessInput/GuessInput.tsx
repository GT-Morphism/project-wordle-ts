import { useState } from "react";

const GuessInput = () => {
	const [guessInput, setGuessInput] = useState("");

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		console.log(guessInput);

		setGuessInput("");
	}

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				required={true}
				pattern=".{5,}"
				title="You need to type 5 characters."
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

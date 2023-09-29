import { useState } from "react";

const GuessInput = () => {
	const [guessInput, setGuessInput] = useState("");

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		console.log(`%c Your Input: ${guessInput}`, "color: yellow");

		setGuessInput("");
	}

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				required={true}
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

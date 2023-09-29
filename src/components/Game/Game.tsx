import GuessInput from "../GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log(`%c The answer: ${answer}`, "color: green");

const Game = () => {
	return (
		<>
			<GuessInput />
		</>
	);
};

export default Game;

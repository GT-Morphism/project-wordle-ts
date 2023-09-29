type GuessProps = {
	userGuessArray: string[];
};

const Guess = ({ userGuessArray }: GuessProps) => {
	return (
		<p className="guess">
			{userGuessArray.map((char, i) => (
				<span key={i} className="cell">
					{char}
				</span>
			))}
		</p>
	);
};

export default Guess;

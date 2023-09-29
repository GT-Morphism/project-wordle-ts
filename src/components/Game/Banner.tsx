import type { TGameEndStatus } from "@/types";

type BannerProps = {
	gameEndStatus: TGameEndStatus;
	numberOfGuesses: number;
	answer: string;
};

const Banner = ({ gameEndStatus, numberOfGuesses, answer }: BannerProps) => {
	return (
		<div className={`banner ${gameEndStatus}`}>
			{gameEndStatus == "happy" ? (
				<HappyBanner numberOfGuesses={numberOfGuesses} />
			) : (
				<SadBanner answer={answer} />
			)}
		</div>
	);
};

function HappyBanner({ numberOfGuesses }: { numberOfGuesses: number }) {
	return (
		<p>
			<strong>Congratulations!</strong> Got it in
			<strong>
				{numberOfGuesses == 1 ? " 1 guess" : ` ${numberOfGuesses} guesses`}
			</strong>
			.
		</p>
	);
}

function SadBanner({ answer }: { answer: string }) {
	return (
		<p>
			Sorry, the correct answer is <strong>{answer}</strong>.
		</p>
	);
}

export default Banner;

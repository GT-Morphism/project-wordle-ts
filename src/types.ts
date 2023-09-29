export type TGuess = {
	content: string;
	id: string;
};

export type TCheckedGuessStatus = "correct" | "misplaced" | "incorrect" | null;

export type TCheckedGuess = {
	letter: string;
	status: TCheckedGuessStatus;
};

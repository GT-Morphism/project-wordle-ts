export const NUM_OF_GUESSES_ALLOWED: number = 6;
// Note that, one can't simply change the word length since
// within "data.ts" we have implicitly assumed that each word
// consists of 5 characters;
export const WORD_LENGTH: number = 5;
export const ARRAY_OF_EMPTY_STRINGS: string[] = Array.from<string>({
	length: WORD_LENGTH,
}).fill("");

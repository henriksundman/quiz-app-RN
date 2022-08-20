export const shuffleArray = (arr: string[]): string[] => {
	return arr.slice(0, arr.length).sort(() => Math.random() - 0.5);
};

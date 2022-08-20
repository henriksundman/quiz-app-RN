import axios from 'axios';

export const fetchQuestions = async (numQuestions: number) => {
	try {
		return await axios.get(
			`https://the-trivia-api.com/api/questions?limit=${numQuestions}`
		);
	} catch (error: any) {
		throw new Error(error);
	}
};

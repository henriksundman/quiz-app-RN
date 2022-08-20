import { IQuestion } from './IQuestion';
export interface IGameState {
	isGameStarted: boolean;
	numberOfQuestions: number;
	gameStartHandler: (numQuestions: number) => void;
	numberOfCorrectAnswers: number;
	addCorrectAnswers: () => void;
	numberOfIncorrectAnswers: number;
	addIncorrectAnswers: () => void;
	questions: IQuestion[];
	loadQuestions: (numQuestions: number) => void;
	error: string;
	isGameOver: boolean;
	gameOver: () => void;
}

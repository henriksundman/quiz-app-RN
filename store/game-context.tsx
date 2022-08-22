import { useState, createContext, ReactNode, useCallback } from 'react';
import { IGameState } from '../interfaces/IGameState';
import { IQuestion } from '../interfaces/IQuestion';
import { fetchQuestions } from '../utils/fetch-data';

interface Props {
	children?: ReactNode;
}

export const GameContext = createContext<IGameState>({
	isGameStarted: false,
	numberOfQuestions: 5,
	gameStartHandler: (numQuestions: number) => {},
	numberOfCorrectAnswers: 0,
	addCorrectAnswers: () => {},
	numberOfIncorrectAnswers: 0,
	addIncorrectAnswers: () => {},
	questions: [],
	loadQuestions: (numQuestions: number) => {},
	error: '',
	isGameOver: false,
	gameOver: () => {},
	reset: false,
	doReset: () => {},
});

export const GameContextProvider = ({ children }: Props) => {
	const [isGameStarted, setIsGameStarted] = useState(false);
	const [numberOfQuestions, setNumberOfQuestions] = useState(5);
	const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
	const [numberOfIncorrectAnswers, setNumberOfIncorrectAnswers] = useState(0);
	const [questions, setQuestions] = useState<IQuestion[]>([]);
	const [error, setError] = useState('');
	const [isGameOver, setIsGameOver] = useState(false);
	const [reset, setReset] = useState(false);

	const gameStartHandler = (numQuestions: number): void => {
		setIsGameStarted(true);
		setNumberOfQuestions(numQuestions);
	};

	const addCorrectAnswers = (): void => {
		setNumberOfCorrectAnswers((prevNum: number) => prevNum + 1);
	};

	const addIncorrectAnswers = (): void => {
		setNumberOfIncorrectAnswers((prevNum: number) => prevNum + 1);
	};

	const loadQuestions = useCallback(async (numberOfQuestions: number) => {
		try {
			const response = await fetchQuestions(numberOfQuestions);
			setQuestions(response.data);
		} catch (error: any) {
			setError(error.message);
		}
	}, []);

	const gameOver = () => {
		setIsGameOver((prev) => !prev);
	};

	const doReset = () => {
		setIsGameStarted(false);
		setNumberOfQuestions(5);
		setNumberOfCorrectAnswers(0);
		setNumberOfIncorrectAnswers(0);
		setQuestions([]);
		setError('');
		setIsGameOver(false);
		setReset(false);
	};

	const value = {
		isGameStarted,
		numberOfQuestions,
		gameStartHandler,
		numberOfCorrectAnswers,
		addCorrectAnswers,
		numberOfIncorrectAnswers,
		addIncorrectAnswers,
		questions,
		loadQuestions,
		error,
		isGameOver,
		gameOver,
		reset,
		doReset,
	};

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

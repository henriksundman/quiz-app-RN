import { View, Text } from 'react-native';

import {
	Fragment,
	SyntheticEvent,
	useContext,
	useEffect,
	useState,
} from 'react';

import { GameContext } from '../store/game-context';
import { Answers } from './Answers';
import { Question } from './Question';
import { ScoreBoard } from './ScoreBoard';

import { checkAnswer } from './gameScreenUtils';

export const GameView = () => {
	const [questionCounter, setQuestionCounter] = useState(0);
	const [isAnswered, setIsAnswered] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState('');

	const {
		loadQuestions,
		numberOfQuestions,
		questions,
		error,
		addCorrectAnswers,
		addIncorrectAnswers,
		isGameOver,
		gameOver,
	} = useContext(GameContext);

	useEffect(() => {
		loadQuestions(numberOfQuestions);
	}, [numberOfQuestions, loadQuestions]);

	let isLoading = questions.length === 0;
	isLoading = error ? false : isLoading;

	const clickAnswerHandler = (event: SyntheticEvent) => {
		setIsAnswered(true);

		const chosenAnswer = event.currentTarget.textContent;

		chosenAnswer && setSelectedAnswer(chosenAnswer);
		const correctAnswer = questions[questionCounter].correctAnswer;

		let isAnswerCorrect;
		if (chosenAnswer) {
			isAnswerCorrect = checkAnswer(chosenAnswer, correctAnswer);
		}

		if (isAnswerCorrect) {
			addCorrectAnswers();
		} else {
			addIncorrectAnswers();
		}
	};

	const clickNextHandler = () => {
		if (questionCounter === questions.length - 1) {
			return gameOver();
		}
		setQuestionCounter((prevCount: number) => prevCount + 1);
		setIsAnswered(false);
	};

	return (
		<Fragment>
			<ScoreBoard currentQuestionIndex={questionCounter} />
			<View>
				{isGameOver && <h1>Game Is Over</h1>}
				{error && <h1>Something went wrong. Please try again later.</h1>}
				{isLoading && <Text>Loading...</Text>}
				{!isLoading && !error && !isGameOver && (
					<>
						<Question question={questions[questionCounter].question} />
						<Answers
							correctAnswer={questions[questionCounter].correctAnswer}
							incorrectAnswers={questions[questionCounter].incorrectAnswers}
							onClickAnswer={clickAnswerHandler}
							isAnswered={isAnswered}
							chosenAnswer={selectedAnswer}
						/>
					</>
				)}
				{isAnswered && <Text onPress={clickNextHandler}>Next Question</Text>}
			</View>
		</Fragment>
	);
};

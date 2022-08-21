import { Button, View, Text, GestureResponderEvent } from 'react-native';

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

	const clickAnswerHandler = (
		event: GestureResponderEvent,
		chosenAnswer: string
	) => {
		setIsAnswered(true);

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

	let lastQuestion = questionCounter === questions.length - 1;

	const clickNextHandler = () => {
		if (lastQuestion) {
			return gameOver();
		}
		setQuestionCounter((prevCount: number) => prevCount + 1);
		setIsAnswered(false);
	};

	return (
		<View style={{ flex: 1 }}>
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
				{isAnswered && (
					<View
						style={{
							width: '90%',
							alignSelf: 'center',
							marginLeft: 8,
							marginTop: 12,
						}}
					>
						<Button
							onPress={clickNextHandler}
							title={lastQuestion ? 'View Results' : 'Next Question'}
						/>
					</View>
				)}
			</View>
		</View>
	);
};

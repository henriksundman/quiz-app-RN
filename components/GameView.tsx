import React, { useContext, useEffect, useRef, useState } from 'react';
import {
	ActivityIndicator,
	GestureResponderEvent,
	ScrollView,
	View,
} from 'react-native';

import { GameContext } from '../store/game-context';
import { Answers } from './Answers';
import { checkAnswer } from './gameScreenUtils';
import { Question } from './Question';
import { ScoreBoard } from './ScoreBoard';

export const GameView = () => {
	const [questionCounter, setQuestionCounter] = useState(0);
	const [isAnswered, setIsAnswered] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState('');

	const scrollRef = useRef<ScrollView | null>(null);

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

	useEffect(() => {
		scrollRef?.current?.scrollTo({ x: 0, y: 0 });
	});

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
			{!isLoading && <ScoreBoard currentQuestionIndex={questionCounter} />}
			<View>
				{isGameOver && <h1>Game Is Over</h1>}
				{error && <h1>Something went wrong. Please try again later.</h1>}
				{isLoading && (
					<View style={{ flex: 1, justifyContent: 'center' }}>
						<ActivityIndicator />
					</View>
				)}
				{!isLoading && !error && !isGameOver && (
					<ScrollView ref={scrollRef} style={{ flex: 1 }}>
						<View
							style={{
								alignItems: 'center',
							}}
						>
							<Question question={questions[questionCounter].question} />
						</View>

						<Answers
							correctAnswer={questions[questionCounter].correctAnswer}
							incorrectAnswers={questions[questionCounter].incorrectAnswers}
							onClickAnswer={clickAnswerHandler}
							isAnswered={isAnswered}
							chosenAnswer={selectedAnswer}
							onClickNext={clickNextHandler}
							isLastQuestion={lastQuestion}
						/>
					</ScrollView>
				)}
			</View>
		</View>
	);
};

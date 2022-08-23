import { useState } from 'react';
import {
	Button,
	GestureResponderEvent,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import { shuffleArray } from './answersUtils';

interface AnswersProps {
	correctAnswer: string;
	incorrectAnswers: string[];
	isAnswered: boolean;
	chosenAnswer: string;
	isLastQuestion: boolean;
	onClickAnswer: (event: GestureResponderEvent, answer: string) => void;
	onClickNext: () => void;
}

export const Answers = ({
	correctAnswer,
	incorrectAnswers,
	onClickAnswer,
	isAnswered,
	chosenAnswer,
	isLastQuestion,
	onClickNext,
}: AnswersProps) => {
	const [isShuffled, setIsShuffled] = useState(false);
	const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
	const [previousCorrectAnswer, setPreviousCorrectAnswer] = useState('');

	if (previousCorrectAnswer === '') {
		setPreviousCorrectAnswer(correctAnswer);
	} else if (previousCorrectAnswer !== correctAnswer) {
		setIsShuffled(false);
		setPreviousCorrectAnswer(correctAnswer);
	}

	const allAnswers = incorrectAnswers.concat(correctAnswer);

	if (!isShuffled) {
		setShuffledAnswers(shuffleArray(allAnswers));
		setIsShuffled(true);
	}

	const correctAnswerIndex = shuffledAnswers.indexOf(correctAnswer);
	const chosenAnswerIndex = shuffledAnswers.indexOf(chosenAnswer);

	return (
		<View>
			<>
				{shuffledAnswers.map((answer, index) => {
					return (
						<View style={styles.container}>
							<Pressable
								key={index}
								disabled={isAnswered}
								style={[
									styles.answer,
									!isAnswered && styles.unAnswered,
									isAnswered && index === correctAnswerIndex && styles.correct,
									isAnswered &&
										index !== correctAnswerIndex &&
										styles.incorrect,
									isAnswered && index === chosenAnswerIndex && styles.clicked,
								]}
								onPress={(event) => onClickAnswer(event, answer)}
							>
								<Text style={styles.answerText}>{answer}</Text>
							</Pressable>
						</View>
					);
				})}
			</>

			{isAnswered && (
				<View style={styles.nextButton}>
					<Button
						color="#7652e3"
						onPress={onClickNext}
						title={isLastQuestion ? 'View Results' : 'Next Question'}
					/>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},
	answer: {
		width: '90%',
		marginHorizontal: 18,
		marginVertical: 8,
		padding: 20,
		elevation: 4,
		shadowColor: '#171717',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	answerText: {
		fontSize: 16,
		textAlign: 'center',
	},
	unAnswered: {
		backgroundColor: 'lightgray',
	},
	correct: {
		backgroundColor: '#50fa83',
	},
	incorrect: {
		backgroundColor: '#f95a5a',
	},
	clicked: {
		borderColor: 'black',
		borderWidth: 3,
	},
	nextButton: {
		width: '90%',
		alignSelf: 'center',
		marginLeft: 4,
		marginTop: 20,
	},
});

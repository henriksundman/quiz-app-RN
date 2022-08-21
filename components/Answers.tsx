import { SyntheticEvent, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { shuffleArray } from './answersUtils';

interface AnswersProps {
	correctAnswer: string;
	incorrectAnswers: string[];
	isAnswered: boolean;
	chosenAnswer: string;
	onClickAnswer: (event: SyntheticEvent) => void;
}

export const Answers = ({
	correctAnswer,
	incorrectAnswers,
	onClickAnswer,
	isAnswered,
	chosenAnswer,
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
			<FlatList
				data={shuffledAnswers}
				keyExtractor={(item) =>
					item + Math.random().toString(36).substring(2, 8)
				}
				renderItem={({ item }) => (
					<View style={styles.container}>
						<Text style={styles.answer}>{item}</Text>
					</View>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginTop: 20,
	},
	answer: {
		marginTop: 20,
		fontSize: 16,
		textAlign: 'center',
		margin: 20,
		padding: 20,
		backgroundColor: 'white',
		elevation: 4,
		shadowColor: '#171717',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	correct: {
		backgroundColor: '#50fa83',
	},
	incorrect: {
		backgroundColor: '#f95a5a',
	},
	clicked: {
		borderColor: 'black',
	},
});

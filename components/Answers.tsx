import { SyntheticEvent, useState } from 'react';
import {
	FlatList,
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
	onClickAnswer: (event: GestureResponderEvent, answer: string) => void;
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

	console.log(!!~correctAnswerIndex);

	return (
		<View>
			<FlatList
				data={shuffledAnswers}
				keyExtractor={(item) =>
					item + Math.random().toString(36).substring(2, 8)
				}
				renderItem={({ item }) => (
					<View style={styles.container}>
						<Pressable
							style={({ pressed }) =>
								pressed ? [styles.answer, styles.pressed] : styles.answer
							}
							onPress={(event) => onClickAnswer(event, item)}
						>
							<Text style={styles.answerText}>{item}</Text>
						</Pressable>
					</View>
				)}
			/>
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
		backgroundColor: 'lightgray',
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
	pressed: {
		opacity: 0.8,
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

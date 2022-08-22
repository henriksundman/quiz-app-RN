import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { GameContext } from '../store/game-context';

interface ScoreBoardProps {
	currentQuestionIndex: number;
}

export const ScoreBoard = ({ currentQuestionIndex }: ScoreBoardProps) => {
	const gameCtx = useContext(GameContext);

	const {
		numberOfQuestions,
		numberOfCorrectAnswers,
		numberOfIncorrectAnswers,
	} = gameCtx;

	return (
		<View style={styles.container}>
			<Text style={styles.textCorrect}>✓{numberOfCorrectAnswers}</Text>
			<Text style={styles.textTotal}>
				{currentQuestionIndex + 1}/{numberOfQuestions}
			</Text>
			<Text style={styles.textIncorrect}>❌{numberOfIncorrectAnswers}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 5,
		marginHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textCorrect: {
		fontSize: 20,
		color: 'green',
	},
	textIncorrect: {
		color: 'red',
		fontSize: 20,
	},
	textTotal: {
		fontSize: 20,
	},
});

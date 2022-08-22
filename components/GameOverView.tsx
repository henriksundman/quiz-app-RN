import { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { GameContext } from '../store/game-context';

export const GameOverView = () => {
	const {
		numberOfQuestions,
		numberOfCorrectAnswers,
		numberOfIncorrectAnswers,
		gameOver,
	} = useContext(GameContext);

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Total: {numberOfQuestions}</Text>
			<Text style={styles.header}>Correct: {numberOfCorrectAnswers}</Text>
			<Text style={styles.header}>Incorrect: {numberOfIncorrectAnswers}</Text>
			<Button title="Play Again" onPress={gameOver} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	header: {
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 40,
	},
	text: {
		fontSize: 20,
	},
});

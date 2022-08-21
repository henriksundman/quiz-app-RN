import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { GameContext } from '../store/game-context';

export const GameOverView = () => {
	const {
		numberOfQuestions,
		numberOfCorrectAnswers,
		numberOfIncorrectAnswers,
	} = useContext(GameContext);

	return (
		<View style={styles.container}>
			<Text>
				You answered {numberOfCorrectAnswers} out of {numberOfQuestions}{' '}
				{numberOfQuestions > 1 ? 'questions' : 'question'} correctly
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
});

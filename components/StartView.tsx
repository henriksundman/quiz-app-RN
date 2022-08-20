import { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { GameContext } from '../store/game-context';

export const StartView = () => {
	const gameCtx = useContext(GameContext);
	const [numQuestions, setNumQuestions] = useState(5);

	const start = (): void => {
		gameCtx.gameStartHandler(numQuestions);
		console.log('start', gameCtx.isGameStarted);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to the Quiz!</Text>
			<Text style={styles.text}>Select number of questions (max 50)</Text>
			<View>
				<Text style={styles.number}>{numQuestions}</Text>
				<View style={styles.addOrSubtract}>
					<Text
						style={styles.operator}
						onPress={() =>
							setNumQuestions((prevVal) => Math.max(1, prevVal - 1))
						}
					>
						➖
					</Text>
					<Text
						style={styles.operator}
						onPress={() =>
							setNumQuestions((prevVal) => Math.max(1, prevVal + 1))
						}
					>
						➕
					</Text>
				</View>
			</View>
			<Text style={styles.text}>Press Start to begin</Text>
			<Text style={styles.start} onPress={start}>
				Start
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		flex: 1,
		justifyContent: 'space-between',
	},
	title: {
		padding: 20,
		fontSize: 26,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	text: {
		textAlign: 'center',
	},
	number: {
		textAlign: 'center',
		fontSize: 26,
		fontWeight: 'bold',
		paddingBottom: 20,
	},
	addOrSubtract: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	operator: {
		padding: 5,
		borderWidth: 1,
		borderRadius: 6,
	},
	start: {
		alignSelf: 'center',
		fontSize: 20,
		width: 100,
		paddingVertical: 10,
		paddingHorizontal: 20,
		marginBottom: 100,
		borderWidth: 1,
		borderRadius: 6,
		textAlign: 'center',
	},
});

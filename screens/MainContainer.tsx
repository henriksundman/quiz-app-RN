import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { GameOverView } from '../components/GameOverView';
import { GameView } from '../components/GameView';
import { StartView } from '../components/StartView';
import { MainScreen } from '../screens/MainScreen';
import { GameContext } from '../store/game-context';

export const MainContainer = () => {
	const { isGameStarted, isGameOver } = useContext(GameContext);

	const gameNotStarted = !isGameStarted && !isGameOver;
	const gameIsStarted = isGameStarted && !isGameOver;
	const gameIsOver = isGameOver;

	console.log(isGameStarted);

	return (
		<View style={styles.container}>
			<Text>
				<MainScreen>
					{gameNotStarted && <StartView />}
					{gameIsStarted && <GameView />}
					{gameIsOver && <GameOverView />}
				</MainScreen>
			</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		width: '90%',
		height: '50%',
		marginTop: 100,
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
});

import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
		marginTop: 20,
		overflow: 'hidden',
	},
});

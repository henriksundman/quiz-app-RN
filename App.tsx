import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { GameOverView } from './components/GameOverView';
import { GameView } from './components/GameView';
import { StartView } from './components/StartView';
import { MainScreen } from './screens/MainScreen';
import { GameContext, GameContextProvider } from './store/game-context';

export default function App() {
	const { isGameStarted, isGameOver } = useContext(GameContext);

	const gameNotStarted = !isGameStarted && !isGameOver;
	const gameIsStarted = isGameStarted && !isGameOver;
	const gameIsOver = isGameOver;

	console.log(isGameStarted);

	return (
		<>
			<StatusBar style="auto" />
			<GameContextProvider>
				<View style={styles.container}>
					<MainScreen>
						{gameNotStarted && <StartView />}
						{gameIsStarted && <GameView />}
						{gameIsOver && <GameOverView />}
					</MainScreen>
				</View>
			</GameContextProvider>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#45ed54',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

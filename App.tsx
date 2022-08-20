import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { MainContainer } from './screens/MainContainer';
import { GameContextProvider } from './store/game-context';

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<GameContextProvider>
				<View style={styles.container}>
					<MainContainer />
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
	},
});

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { MainContainer } from './screens/MainContainer';
import { GameContextProvider } from './store/game-context';

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<GameContextProvider>
				<View style={styles.container}>
					<StatusBar style="auto" />
					<MainContainer />
				</View>
			</GameContextProvider>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#45ed54',
		alignItems: 'center',
	},
});

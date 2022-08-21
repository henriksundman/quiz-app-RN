import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Platform } from 'react-native';

import { MainContainer } from './screens/MainContainer';
import { GameContextProvider } from './store/game-context';

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
			<GameContextProvider>
				<View style={styles.container}>
					<StatusBar style={Platform.OS === 'ios' ? 'light' : 'dark'} />
					<MainContainer />
				</View>
			</GameContextProvider>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#bbdff5',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

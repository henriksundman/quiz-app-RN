import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { MainScreen } from './screens/MainScreen';
import { StartView } from './components/StartView';

export default function App() {
	return (
		<View style={styles.container}>
			<MainScreen>
				<StartView></StartView>
			</MainScreen>
			<StatusBar style="auto" />
		</View>
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

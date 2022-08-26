import {
	Platform,
	ScrollView,
	StyleSheet,
	useWindowDimensions,
	View,
} from 'react-native';

interface MainScreenProps {
	children: React.ReactNode;
}

export const MainScreen = ({ children }: MainScreenProps) => {
	const cardWidth = Math.round(useWindowDimensions().width * 0.9);
	const cardHeightIOS = Math.round(useWindowDimensions().height * 0.85);
	const cardHeightAndroid = Math.round(useWindowDimensions().height * 0.9);

	const styles = StyleSheet.create({
		card: {
			alignItems: 'center',
			minHeight: Platform.OS === 'ios' ? cardHeightIOS : cardHeightAndroid,
			maxHeight: Platform.OS === 'ios' ? cardHeightIOS : cardHeightAndroid,
			width: cardWidth,
			elevation: 4,
			backgroundColor: 'white',
			shadowColor: '#171717',
			shadowOffset: { width: -2, height: 4 },
			shadowOpacity: 0.2,
			shadowRadius: 3,
			borderRadius: 6,
			overflow: 'hidden',
		},
	});
	return <View style={styles.card}>{children}</View>;
};

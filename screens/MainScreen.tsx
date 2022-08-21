import { Platform, StyleSheet, useWindowDimensions, View } from 'react-native';

interface MainScreenProps {
	children: React.ReactNode;
}

export const MainScreen = ({ children }: MainScreenProps) => {
	const cardWidth = useWindowDimensions().width * 0.9;
	const cardHeightIOS = useWindowDimensions().height * 0.8;
	const cardHeightAndroid = useWindowDimensions().height * 0.9;

	const styles = StyleSheet.create({
		card: {
			marginTop: 20,
			alignItems: 'center',
			height: Platform.OS === 'ios' ? cardHeightIOS : cardHeightAndroid,
			width: cardWidth,
			elevation: 4,
			backgroundColor: 'white',
			shadowColor: '#171717',
			shadowOffset: { width: -2, height: 4 },
			shadowOpacity: 0.2,
			shadowRadius: 3,
			borderRadius: 6,
		},
	});
	return <View style={styles.card}>{children}</View>;
};

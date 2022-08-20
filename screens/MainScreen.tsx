import { StyleSheet, View } from 'react-native';

interface MainScreenProps {
	children: React.ReactNode;
}

export const MainScreen = ({ children }: MainScreenProps) => {
	return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
	card: {
		marginTop: 20,
		alignItems: 'center',
		width: '90%',
		height: '90%',
		elevation: 4,
		backgroundColor: 'white',
		shadowColor: '#171717',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		borderRadius: 6,
	},
});

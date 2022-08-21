import { StyleSheet, Text, View } from 'react-native';

interface QuestionProps {
	question?: string;
}

export const Question = ({ question }: QuestionProps) => {
	return (
		<View>
			<Text style={styles.text}>{question}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		marginTop: 30,
		paddingHorizontal: 10,
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
	},
});

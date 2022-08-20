import { StyleSheet, Text } from 'react-native';

interface QuestionProps {
	question?: string;
}

export const Question = ({ question }: QuestionProps) => {
	return <Text style={styles.text}>{question}</Text>;
};

const styles = StyleSheet.create({
	text: {
		marginTop: 30,
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
	},
});

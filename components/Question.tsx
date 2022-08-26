import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface QuestionProps {
	question?: string;
}

export const Question = ({ question }: QuestionProps) => {
	const [showQuestion, setShowQuestion] = useState(true);
	const [showQuestionToggle, setShowQuestionToggle] = useState(false);

	useEffect(() => {
		if (question) {
			question.length > 220
				? setShowQuestionToggle(true)
				: setShowQuestionToggle(false);
		}
	}, [question]);

	const toggleQuestion = () => {
		setShowQuestion((prev) => !prev);
	};

	const hideQuestionTitle = showQuestion ? 'Hide Question' : 'Show Question';
	return (
		<View style={{ width: '100%', alignItems: 'center' }}>
			{showQuestion && <Text style={styles.text}>{question}</Text>}
			{showQuestionToggle && (
				<Button title={hideQuestionTitle} onPress={toggleQuestion} />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		width: '90%',
		justifyContent: 'center',
		marginTop: 30,
		paddingHorizontal: 10,
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
	},
});

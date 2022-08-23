import { useEffect, useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

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
		<View>
			{showQuestion && <Text style={styles.text}>{question}</Text>}
			{showQuestionToggle && (
				<Button title={hideQuestionTitle} onPress={toggleQuestion} />
			)}
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

import { useEffect, useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

interface QuestionProps {
	question?: string;
}

const Q =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae minus, illo ex enim nam, minima unde hic aspernatur illum quos error ratione sed quod culpa. Officiis, odio? Quibusdam quasi nobis placeat est tempora labore modi. Veritatis, libero quisquam. Esse quos quae possimus exercitationem libero placeat voluptates quidem odio tempora.';

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
			{showQuestion && <Text style={styles.text}>{Q}</Text>}
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

import { StyleSheet, Text, View } from 'react-native';

interface QuestionProps {
	question?: string;
}

const DUMMUQ =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus adipisci eaque reiciendis asperiores veritatis quod! Laudantium deleniti laboriosam ut quasi fugiat rerum quod cupiditate. Dolore tenetur accusantium consequuntur quam corporis, deserunt doloremque rem nostrum dicta commodi repellat pariatur incidunt dolorem libero ipsam possimus. Non quasi voluptates recusandae nisi eaque unde?';

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

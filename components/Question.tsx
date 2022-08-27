import { StyleSheet, Text, View } from 'react-native';

interface QuestionProps {
	question?: string;
}

const DUMMY_QUESTION =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae minus, illo ex enim nam, minima unde hic aspernatur illum quos error ratione sed quod culpa. Officiis, odio? Quibusdam quasi nobis placeat est tempora labore modi. Veritatis, libero quisquam. Esse quos quae possimus exercitationem libero placeat voluptates quidem odio tempora. sdsdfsdflas;dlkfja;lsdkfj asl; laksdjf;lask laskdjf ;alskdjf a;lskdj fasdlkj ajsd f';

export const Question = ({ question }: QuestionProps) => {
	//question = DUMMY_QUESTION;

	return (
		<View style={{ width: '100%', alignItems: 'center' }}>
			<Text style={styles.text}>{question}</Text>
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

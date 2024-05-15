import { Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { s } from './InputTemps.style';

export function InputTemps({ defaultValue, onChangeText, unit }) {
	return (
		<View style={s.container}>
			<TextInput style={s.input} placeholder="entrer une valeur" keyboardType="numbers-and-punctuation" maxLength={4} onChangeText={onChangeText} />
			<Text style={s.unit}>{unit}</Text>
		</View>
	);
}

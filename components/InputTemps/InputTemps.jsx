import { Text, TextInput, View } from 'react-native';
import { s } from './InputTemps.style';

export function InputTemps({ onChangeText, unit }) {
	return (
		<View style={s.container}>
			<TextInput style={s.input} returnKeyType="done" placeholder="entrer une valeur" keyboardType="numeric" maxLength={4} onChangeText={onChangeText} />
			<Text style={s.unit}>{unit}</Text>
		</View>
	);
}

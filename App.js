import { ImageBackground, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { s } from './App.style';
import hotBackground from './assets/hot.png';
import coldBackground from './assets/cold.png';
import { InputTemps } from './components/InputTemps/InputTemps';
import { TemperatureDisplay } from './components/TemperatureDisplay/TemperatureDisplay';
import { ButtonConvert } from './components/ButtonConvert/ButtonConvert';
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT, UNITS } from './constant';
import { convertTemperatureTo, getOppositeUnit, isIceTemperature } from './services/Temperature-service';

export default function App() {
	const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
	const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
	const [currentBackground, setCunentBackground] = useState();
	const OppositeUnit = getOppositeUnit(currentUnit);
	useEffect(() => {
		const temperatureAsFloat = Number.parseFloat(inputValue);
		if (!isNaN(temperatureAsFloat)) {
			const isColdBackground = isIceTemperature(inputValue, currentUnit);
			setCunentBackground(isColdBackground ? coldBackground : hotBackground);
		}
	}, [inputValue, currentUnit]);

	function getConvertedTemperature() {
		const valueAsFloat = Number.parseFloat(inputValue);
		return isNaN(valueAsFloat) ? '' : convertTemperatureTo(OppositeUnit, valueAsFloat).toFixed(1);
	}

	return (
		<ImageBackground source={currentBackground} style={s.container}>
			<View style={s.workspace}>
				<TemperatureDisplay value={getConvertedTemperature()} unit={OppositeUnit} />

				<InputTemps onChangeText={setInputValue} />

				<View>
					<ButtonConvert
						onPress={() => {
							setCurrentUnit(OppositeUnit);
						}}
						unit={currentUnit}
					/>
				</View>
			</View>
		</ImageBackground>
	);
}

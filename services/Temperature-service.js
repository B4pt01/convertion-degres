import { UNITS } from '../constant';

function getOppositeUnit(unit) {
	return unit === UNITS.celsius ? UNITS.faranheit : UNITS.celsius;
}

function convertTemperatureTo(unit, value) {
	if (unit === UNITS.celsius) {
		return (value - 32) / 1.8;
	} else {
		return value * 1.8 + 32;
	}
}

function isIceTemperature(value, unit) {
	if (unit === UNITS.celsius) {
		return value <= 0;
	} else {
		return value <= 32;
	}
}

export { getOppositeUnit, convertTemperatureTo, isIceTemperature };

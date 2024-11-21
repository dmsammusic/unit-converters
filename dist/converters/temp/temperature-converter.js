"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TempConverter = void 0;
exports.convertTemperature = convertTemperature;
const TEMPERATURE_CONVERSIONS = {
    celsius: 'C',
    C: 'C', // celsius
    fahrenheit: 'F',
    F: 'F', // fahrenheit
    kelvin: 'K',
    K: 'K', // kelvin
};
function convertTemperature(value, from, to) {
    if (!(from in TEMPERATURE_CONVERSIONS) || !(to in TEMPERATURE_CONVERSIONS)) {
        throw new Error(`Unsupported units: ${from} or ${to}`);
    }
    // If converting to the same unit, return the original value
    if (from === to)
        return value;
    switch (`${from}-${to}`) {
        case 'C-F': // Celsius to Fahrenheit
            return (value * 9) / 5 + 32;
        case 'F-C': // Fahrenheit to Celsius
            return ((value - 32) * 5) / 9;
        case 'C-K': // Celsius to Kelvin
            return value + 273.15;
        case 'K-C': // Kelvin to Celsius
            return value - 273.15;
        case 'F-K': // Fahrenheit to Kelvin
            return ((value - 32) * 5) / 9 + 273.15;
        case 'K-F': // Kelvin to Fahrenheit
            return ((value - 273.15) * 9) / 5 + 32;
        default:
            throw new Error(`Conversion from ${from} to ${to} is not supported`);
    }
}
exports.TempConverter = {
    celsiusToFahrenheit: (celsius) => convertTemperature(celsius, 'C', 'F'),
    fahrenheitToCelsius: (fahrenheit) => convertTemperature(fahrenheit, 'F', 'C'),
};

declare const TEMPERATURE_CONVERSIONS: {
    celsius: string;
    C: string;
    fahrenheit: string;
    F: string;
    kelvin: string;
    K: string;
};
type DefinedUnits = keyof typeof TEMPERATURE_CONVERSIONS;
export declare function convertTemperature(value: number, from: DefinedUnits, to: DefinedUnits): number;
export declare const TempConverter: {
    celsiusToFahrenheit: (celsius: number) => number;
    fahrenheitToCelsius: (fahrenheit: number) => number;
};
export {};

// Mass conversion factors (base unit: kg)
const MASS_CONVERSIONS = {
	// Metric units
	kilogram: 1,
	kg: 1,
	gram: 0.001,
	g: 0.001,

	// Imperial units
	pound: 0.453592, // 1 pound = 0.453592 kg
	lb: 0.453592,
	ounce: 0.0283495, // 1 ounce = 0.0283495 kg
	oz: 0.0283495,

	// Tons
	'metric-ton': 1000,
	ton: 1000, // metric ton
	'uk-ton': 1016.047, // 1 UK ton = 1016.047 kg
	'us-ton': 907.185, // 1 US ton = 907.185 kg
};

// Define a type for supported units
type DefinedUnits = keyof typeof MASS_CONVERSIONS;
/**
 * Converts a mass value from one unit to another.
 *
 * @param {number} value - The mass value to convert.
 * @param {DefinedUnits} from - The unit to convert from.
 * @param {DefinedUnits} to - The unit to convert to.
 * @returns {number} The converted mass value.
 * @throws {Error} If the conversion units are not supported.
 *
 * @example
 * convertMass(1, 'lb', 'kg') // 0.453592
 * convertMass(1, 'g', 'oz') // 0.035274
 */
export function convertMass(value: number, from: DefinedUnits, to: DefinedUnits): number {
	if (!(from in MASS_CONVERSIONS) || !(to in MASS_CONVERSIONS)) {
		throw new Error(`Unsupported mass units: ${from} or ${to}`);
	}
	if (from === to) return value;

	const fromFactor = MASS_CONVERSIONS[from];
	const toFactor = MASS_CONVERSIONS[to];

	return (value * fromFactor) / toFactor;
}

/**
 * Rounds a mass value to a specified number of decimal places.
 *
 * @param {number} value - The mass value to round.
 * @param {number} [decimals=4] - The number of decimal places to round to.
 * @returns {number} The rounded mass value.
 *
 * @example
 * roundMass(1.23456789, 2) // 1.23
 * roundMass(1.23456789, 4) // 1.2346
 */
export function roundMass(value: number, decimals: number = 4): number {
	const factor = Math.pow(10, decimals);
	return Math.round(value * factor) / factor;
}

/**
 * Utility object for common mass conversions.
 */
export const MassConverter = {
	/**
	 * Converts pounds to kilograms.
	 * @param {number} pounds - The mass in pounds.
	 * @returns {number} The mass in kilograms.
	 *
	 * @example
	 * MassConverter.poundsToKilograms(1) // 0.453592
	 */
	poundsToKilograms: (pounds: number) => convertMass(pounds, 'lb', 'kg'),

	/**
	 * Converts kilograms to pounds.
	 * @param {number} kg - The mass in kilograms.
	 * @returns {number} The mass in pounds.
	 *
	 * @example
	 * MassConverter.kilogramsToPounds(1) // 2.20462
	 */
	kilogramsToPounds: (kg: number) => convertMass(kg, 'kg', 'lb'),

	/**
	 * Converts ounces to grams.
	 * @param {number} oz - The mass in ounces.
	 * @returns {number} The mass in grams.
	 *
	 * @example
	 * MassConverter.ouncesToGrams(1) // 28.35
	 */
	ouncesToGrams: (oz: number) => convertMass(oz, 'oz', 'g'),

	/**
	 * Converts grams to ounces.
	 * @param {number} grams - The mass in grams.
	 * @returns {number} The mass in ounces.
	 *
	 * @example
	 * MassConverter.gramsToOunces(28.35) // 1
	 */
	gramsToOunces: (grams: number) => convertMass(grams, 'g', 'oz'),

	/**
	 * Converts metric tons to US tons.
	 * @param {number} metricTon - The mass in metric tons.
	 * @returns {number} The mass in US tons.
	 */
	metricToUSTon: (metricTon: number) => convertMass(metricTon, 'ton', 'us-ton'),

	/**
	 * Converts metric tons to UK tons.
	 * @param {number} metricTon - The mass in metric tons.
	 * @returns {number} The mass in UK tons.
	 */
	metricToUKTon: (metricTon: number) => convertMass(metricTon, 'ton', 'uk-ton'),
};

export const convertWeight = convertMass;

const AREA_CONVERSIONS = {
	square_meter: 1, // Alias for square metre
	square_metre: 1,
	square_centimeter: 0.0001, // Alias for square centimetre
	square_centimetre: 0.0001,
	square_inch: 0.0006451600001,
	square_foot: 0.092903,
	acre: 4046.8564224,
	are: 100,
	hectare: 10000,
};

type DefinedUnits = keyof typeof AREA_CONVERSIONS;

/**
 * Converts a value from one unit of area to another.
 *
 * @example
 * convertArea(1, 'square_meter', 'square_foot') // 10.7639
 * convertArea(1, 'square_foot', 'square_meter') // 0.092903
 * convertArea(1, 'square_meter', 'hectare') // 0.01
 *
 * @param {number} value - The value to convert
 * @param {DefinedUnits} from - The unit to convert from
 * @param {DefinedUnits} to - The unit to convert to
 * @returns {number} The converted value
 * @throws {Error} If the conversion is not supported
 */
export function convertArea(value: number, from: DefinedUnits, to: DefinedUnits): number {
	if (!(from in AREA_CONVERSIONS) || !(to in AREA_CONVERSIONS)) {
		throw new Error(`Unsupported units: ${from} or ${to}`);
	}

	const fromFactor = AREA_CONVERSIONS[from];
	const toFactor = AREA_CONVERSIONS[to];

	const actualValue = (value * fromFactor) / toFactor;

	// Round to a fixed number of decimals to avoid floating-point errors
	return parseFloat(actualValue.toFixed(8));
}

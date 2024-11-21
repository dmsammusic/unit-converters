const LENGTH_CONVERSIONS = {
	meter: 1,
	/**meter reference */
	m: 1,
	millimeter: 0.001,
	/**millimeter reference */
	mm: 0.001,
	centimeter: 0.01,
	/**centimeter reference */
	cm: 0.01,
	kilometer: 1000,
	/**kilometer reference */
	km: 1000,
	inch: 0.0254,
	foot: 0.3048,
	f: 0.3048,
	feet: 0.3048, // Alias for foot
	yard: 0.9144,
	mile: 1609.344,
	nautical_mile: 1852,
	mil: 0.0000254,
};

type DefinedUnits = keyof typeof LENGTH_CONVERSIONS;

/**
 * Converts a value from one unit of length to another.
 *
 * @example
 * convertLength(1, 'meter', 'kilometer') // 0.001
 * convertLength(1, 'kilometer', 'meter') // 1000
 * convertLength(1, 'meter', 'inch') // 39.3701
 *
 * @param {number} value - The value to convert
 * @param {DefinedUnits} from - The unit to convert from
 * @param {DefinedUnits} to - The unit to convert to
 * @returns {number} The converted value
 * @throws {Error} If the conversion is not supported
 */
export function convertLength(value: number, from: DefinedUnits, to: DefinedUnits): number {
	if (!(from in LENGTH_CONVERSIONS) || !(to in LENGTH_CONVERSIONS)) {
		throw new Error(`Unsupported units: ${from} or ${to}`);
	}

	const fromFactor = LENGTH_CONVERSIONS[from];
	const toFactor = LENGTH_CONVERSIONS[to];

	return (value * fromFactor) / toFactor;
}

export const LengthConverter = {
	/** Helper function converts meter to Km  */
	meterToKm: (meterValue: number) => convertLength(meterValue, 'meter', 'kilometer'),
	/**  converts km to mile */
	kmToMile: (value: number) => convertLength(value, 'kilometer', 'mile'),
	/**  converts mile to km */
	mileTOKm: (value: number) => convertLength(value, 'mile', 'kilometer'),
	/**  converts feet to inch */
	feetToInch: (feet: number) => convertLength(feet, 'feet', 'inch'),
	/**  converts inch to feet */
	inchToFeet: (inch: number) => convertLength(inch, 'inch', 'feet'),
};

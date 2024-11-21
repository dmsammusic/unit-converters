const volumeConversions = {
	liter: { gallon: 0.264172, quart: 1.05669 },
	gallon: { liter: 3.78541, quart: 4 },
	quart: { liter: 0.946353, gallon: 0.25 },
};

type TFrom = keyof typeof volumeConversions;
type TTo = keyof typeof volumeConversions;

/**
 * Converts a value from one unit of volume to another.
 *
 * @example
 * convertVolume(1, 'liter', 'gallon') // 0.264172
 * convertVolume(1, 'gallon', 'quart') // 4
 * convertVolume(1, 'quart', 'liter') // 0.946353
 *
 * @param {number} value - The value to convert
 * @param {TFrom} from - The unit to convert from
 * @param {TTo} to - The unit to convert to
 * @returns {number} The converted value
 * @throws {Error} If the conversion is not supported
 */
export function convertVolume(value: number, from: TFrom, to: TTo): number {
	if (from === to) return value;
	const conversionRate = volumeConversions[from][to as keyof (typeof volumeConversions)[TFrom]];
	if (!conversionRate) {
		throw new Error(`Conversion from ${from} to ${to} not supported.`);
	}
	return value * conversionRate;
}

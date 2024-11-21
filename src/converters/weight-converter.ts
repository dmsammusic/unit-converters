const weightConversions = {
	kilogram: { pound: 2.20462, ounce: 35.274 },
	pound: { kilogram: 0.453592, ounce: 16 },
	ounce: { kilogram: 0.0283495, pound: 0.0625 },
};

type TFrom = keyof typeof weightConversions;
type TTo = keyof typeof weightConversions;

/**
 * Converts a value from one unit of weight to another.
 *
 * @example
 * convertWeight(1, 'kilogram', 'pound') // 2.20462
 * convertWeight(1, 'pound', 'ounce') // 16
 * convertWeight(1, 'ounce', 'kilogram') // 0.0283495
 *
 * @param {number} value - The value to convert
 * @param {TFrom} from - The unit to convert from
 * @param {TFrom} to - The unit to convert to
 * @returns {number} The converted value
 * @throws {Error} If the conversion is not supported
 */
export function convertWeight(value: number, from: TFrom, to: TTo): number {
	if (from === to) return value;
	const conversionRate = weightConversions[from][to as keyof (typeof weightConversions)[TFrom]];
	if (!conversionRate) throw new Error(`Conversion from ${from} to ${to} not supported.`);
	return value * conversionRate;
}

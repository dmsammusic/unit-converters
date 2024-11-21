const lengthConversions = {
	meter: { mile: 0.000621371, foot: 3.28084, yard: 1.09361 },
	kilometer: { mile: 0.621371, foot: 3280.84, yard: 1093.61 },
	mile: { meter: 1609.34, kilometer: 1.60934, yard: 1760, foot: 5280 },
	foot: { meter: 0.3048, kilometer: 0.0003048, mile: 0.000189394, yard: 0.333333 },
	yard: { meter: 0.9144, kilometer: 0.0009144, mile: 0.000568182, foot: 3 },
};

type TFrom = keyof typeof lengthConversions;
type TTo = keyof typeof lengthConversions;

/**
 * Length converter
 *
 * @example
 * convertLength(1, 'meter', 'mile') // 0.000621371
 * convertLength(1, 'mile', 'meter') // 1609.34
 * convertLength(1, 'kilometer', 'yard') // 1093.61
 * @function convertLength
 * @param {number} value - The value to convert
 * @param {TFrom} from - The unit to convert from
 * @param {TTo} to - The unit to convert to
 * @returns {number} The converted value
 */
export function convertLength(value: number, from: TFrom, to: TTo): number {
    if (from === to) return value;
    const conversionRate = lengthConversions[from][to as keyof (typeof lengthConversions)[TFrom]];
    if (!conversionRate) throw new Error(`Conversion from ${from} to ${to} not supported.`);
    return value * conversionRate;
}

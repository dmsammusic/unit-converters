"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertVolume = convertVolume;
const volumeConversions = {
    liter: { gallon: 0.264172, quart: 1.05669 },
    gallon: { liter: 3.78541, quart: 4 },
    quart: { liter: 0.946353, gallon: 0.25 },
};
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
function convertVolume(value, from, to) {
    if (from === to)
        return value;
    const conversionRate = volumeConversions[from][to];
    if (!conversionRate) {
        throw new Error(`Conversion from ${from} to ${to} not supported.`);
    }
    return value * conversionRate;
}

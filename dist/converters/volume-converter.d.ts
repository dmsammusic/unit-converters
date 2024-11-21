declare const volumeConversions: {
    liter: {
        gallon: number;
        quart: number;
    };
    gallon: {
        liter: number;
        quart: number;
    };
    quart: {
        liter: number;
        gallon: number;
    };
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
export declare function convertVolume(value: number, from: TFrom, to: TTo): number;
export {};

declare const weightConversions: {
    kilogram: {
        pound: number;
        ounce: number;
    };
    pound: {
        kilogram: number;
        ounce: number;
    };
    ounce: {
        kilogram: number;
        pound: number;
    };
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
export declare function convertWeight(value: number, from: TFrom, to: TTo): number;
export {};

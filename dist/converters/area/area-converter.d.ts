declare const AREA_CONVERSIONS: {
    square_meter: number;
    square_metre: number;
    square_centimeter: number;
    square_centimetre: number;
    square_inch: number;
    square_foot: number;
    acre: number;
    are: number;
    hectare: number;
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
export declare function convertArea(value: number, from: DefinedUnits, to: DefinedUnits): number;
export {};

declare const MASS_CONVERSIONS: {
    kilogram: number;
    kg: number;
    gram: number;
    g: number;
    pound: number;
    lb: number;
    ounce: number;
    oz: number;
    'metric-ton': number;
    ton: number;
    'uk-ton': number;
    'us-ton': number;
};
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
export declare function convertMass(value: number, from: DefinedUnits, to: DefinedUnits): number;
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
export declare function roundMass(value: number, decimals?: number): number;
/**
 * Utility object for common mass conversions.
 */
export declare const MassConverter: {
    /**
     * Converts pounds to kilograms.
     * @param {number} pounds - The mass in pounds.
     * @returns {number} The mass in kilograms.
     *
     * @example
     * MassConverter.poundsToKilograms(1) // 0.453592
     */
    poundsToKilograms: (pounds: number) => number;
    /**
     * Converts kilograms to pounds.
     * @param {number} kg - The mass in kilograms.
     * @returns {number} The mass in pounds.
     *
     * @example
     * MassConverter.kilogramsToPounds(1) // 2.20462
     */
    kilogramsToPounds: (kg: number) => number;
    /**
     * Converts ounces to grams.
     * @param {number} oz - The mass in ounces.
     * @returns {number} The mass in grams.
     *
     * @example
     * MassConverter.ouncesToGrams(1) // 28.35
     */
    ouncesToGrams: (oz: number) => number;
    /**
     * Converts grams to ounces.
     * @param {number} grams - The mass in grams.
     * @returns {number} The mass in ounces.
     *
     * @example
     * MassConverter.gramsToOunces(28.35) // 1
     */
    gramsToOunces: (grams: number) => number;
    /**
     * Converts metric tons to US tons.
     * @param {number} metricTon - The mass in metric tons.
     * @returns {number} The mass in US tons.
     */
    metricToUSTon: (metricTon: number) => number;
    /**
     * Converts metric tons to UK tons.
     * @param {number} metricTon - The mass in metric tons.
     * @returns {number} The mass in UK tons.
     */
    metricToUKTon: (metricTon: number) => number;
};
export declare const convertWeight: typeof convertMass;
export {};

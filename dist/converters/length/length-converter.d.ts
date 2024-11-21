declare const LENGTH_CONVERSIONS: {
    meter: number;
    /**meter reference */
    m: number;
    millimeter: number;
    /**millimeter reference */
    mm: number;
    centimeter: number;
    /**centimeter reference */
    cm: number;
    kilometer: number;
    /**kilometer reference */
    km: number;
    inch: number;
    foot: number;
    f: number;
    feet: number;
    yard: number;
    mile: number;
    nautical_mile: number;
    mil: number;
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
export declare function convertLength(value: number, from: DefinedUnits, to: DefinedUnits): number;
export declare const LengthConverter: {
    /** Helper function converts meter to Km  */
    meterToKm: (meterValue: number) => number;
    /**  converts km to mile */
    kmToMile: (value: number) => number;
    /**  converts mile to km */
    mileTOKm: (value: number) => number;
    /**  converts feet to inch */
    feetToInch: (feet: number) => number;
    /**  converts inch to feet */
    inchToFeet: (inch: number) => number;
};
export {};

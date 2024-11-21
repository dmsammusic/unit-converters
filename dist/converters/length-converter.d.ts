declare const LENGTH_CONVERSIONS: {
    meter: number;
    millimeter: number;
    centimeter: number;
    kilometer: number;
    inch: number;
    foot: number;
    feet: number;
    yard: number;
    mile: number;
    nautical_mile: number;
    mil: number;
};
type DefinedUnits = keyof typeof LENGTH_CONVERSIONS;
export declare function convertLength(value: number, from: DefinedUnits, to: DefinedUnits): number;
export {};

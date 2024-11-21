declare const VOLUME_CONVERSIONS: {
    liter: number;
    litre: number;
    milliliter: number;
    millilitre: number;
    cubic_centimeter: number;
    cubic_metre: number;
    cubic_meter: number;
    cubic_inch: number;
    cubic_foot: number;
    us_gallon: number;
    gallon: number;
    uk_gallon: number;
    quart: number;
};
type DefinedUnits = keyof typeof VOLUME_CONVERSIONS;
export declare function convertVolume(value: number, from: DefinedUnits, to: DefinedUnits): number;
export {};

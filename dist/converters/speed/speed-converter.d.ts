declare const SPEED_CONVERSIONS: {
    'meter-per-second': number;
    mps: number;
    'kilometer-per-second': number;
    kps: number;
    'kilometer-per-hour': number;
    kmh: number;
    'inch-per-second': number;
    ips: number;
    'inch-per-hour': number;
    iph: number;
    'feet-per-second': number;
    fps: number;
    'feet-per-hour': number;
    fph: number;
    'mile-per-second': number;
    mps_mile: number;
    'mile-per-hour': number;
    mph: number;
};
type SpeedUnit = keyof typeof SPEED_CONVERSIONS;
/**
 * Converts speed between different units
 * @param value - Numerical value to convert
 * @param from - Source unit
 * @param to - Target unit
 * @returns Converted speed value
 */
export declare function convertSpeed(value: number, from: SpeedUnit, to: SpeedUnit): number;
export declare function roundSpeed(value: number, decimals?: number): number;
export declare const SpeedConverter: {
    metersPerSecondToKilometersPerHour: (mps: number) => number;
    kilometersPerHourToMetersPerSecond: (kmh: number) => number;
    milesPerSecondToKilometersPerHour: (mps: number) => number;
    milesPerHourToFeetPerSecond: (mph: number) => number;
    feetPerSecondToMilesPerHour: (fps: number) => number;
    kmToMilesPerHour: (kmh: number) => number;
    mileToKmPerHour: (mph: number) => number;
};
export {};

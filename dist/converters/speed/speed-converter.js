"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeedConverter = void 0;
exports.convertSpeed = convertSpeed;
exports.roundSpeed = roundSpeed;
// Speed conversion factors (base unit: meters per second)
const SPEED_CONVERSIONS = {
    // Metric
    'meter-per-second': 1,
    mps: 1,
    'kilometer-per-second': 1000,
    kps: 1000,
    'kilometer-per-hour': 0.277778, // 1 km/h = 1/3.6 m/s
    kmh: 0.277778,
    // Imperial
    'inch-per-second': 0.0254,
    ips: 0.0254,
    'inch-per-hour': 0.0000070556,
    iph: 0.0000070556,
    'feet-per-second': 0.3048,
    fps: 0.3048,
    'feet-per-hour': 0.0000847222,
    fph: 0.0000847222,
    'mile-per-second': 1609.344, // Precise conversion for 1 mile
    mps_mile: 1609.344,
    'mile-per-hour': 0.44704,
    mph: 0.44704,
};
/**
 * Converts speed between different units
 * @param value - Numerical value to convert
 * @param from - Source unit
 * @param to - Target unit
 * @returns Converted speed value
 */
function convertSpeed(value, from, to) {
    // Validate input units
    if (!(from in SPEED_CONVERSIONS) || !(to in SPEED_CONVERSIONS)) {
        throw new Error(`Unsupported speed units: ${from} or ${to}`);
    }
    // If converting to the same unit, return the original value
    if (from === to)
        return value;
    const fromFactor = SPEED_CONVERSIONS[from];
    const toFactor = SPEED_CONVERSIONS[to];
    return (value * fromFactor) / toFactor;
}
// Utility function for precise rounding
function roundSpeed(value, decimals = 4) {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}
// Convenience conversion methods
exports.SpeedConverter = {
    // Metric conversions
    metersPerSecondToKilometersPerHour: (mps) => convertSpeed(mps, 'meter-per-second', 'kilometer-per-hour'),
    kilometersPerHourToMetersPerSecond: (kmh) => convertSpeed(kmh, 'kilometer-per-hour', 'meter-per-second'),
    milesPerSecondToKilometersPerHour: (mps) => {
        // More precise conversion calculation
        // 1 mile = 1.609344 kilometers
        // 1 second conversion
        return mps * 1.609344 * 3600;
    },
    // Imperial conversions
    milesPerHourToFeetPerSecond: (mph) => convertSpeed(mph, 'mile-per-hour', 'feet-per-second'),
    feetPerSecondToMilesPerHour: (fps) => convertSpeed(fps, 'feet-per-second', 'mile-per-hour'),
    kmToMilesPerHour: (kmh) => convertSpeed(kmh, 'kilometer-per-hour', 'mile-per-hour'),
    mileToKmPerHour: (mph) => convertSpeed(mph, 'mile-per-hour', 'kilometer-per-hour'),
};

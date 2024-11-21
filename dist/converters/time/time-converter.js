"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeConverter = void 0;
exports.convertTime = convertTime;
exports.roundTime = roundTime;
// Time conversion factors (base unit: seconds)
const TIME_CONVERSIONS = {
    // Base units
    millisecond: 0.001,
    ms: 0.001,
    second: 1,
    sec: 1,
    seconds: 1,
    // Larger time units
    minute: 60,
    min: 60,
    hour: 3600,
    hr: 3600,
    day: 86400,
    week: 604800,
    month: 2592000, // Approximate 30-day month
    year: 31536000, // Non-leap year
};
/**
 * Converts time between different units
 * @param value - Numerical value to convert
 * @param from - Source unit
 * @param to - Target unit
 * @returns Converted time value
 */
function convertTime(value, from, to) {
    // Validate input units
    if (!(from in TIME_CONVERSIONS) || !(to in TIME_CONVERSIONS)) {
        throw new Error(`Unsupported time units: ${from} or ${to}`);
    }
    // If converting to the same unit, return the original value
    if (from === to)
        return value;
    // Convert to base unit (seconds) first, then to target unit
    const baseValue = value * TIME_CONVERSIONS[from];
    return baseValue / TIME_CONVERSIONS[to];
}
// Utility function for precise rounding
function roundTime(value, decimals = 4) {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}
// Convenience conversion methods
exports.TimeConverter = {
    // Quick conversion methods
    minutesToSeconds: (minutes) => convertTime(minutes, 'min', 'sec'),
    secondsToMinutes: (seconds) => convertTime(seconds, 'sec', 'min'),
    hoursToMinutes: (hours) => convertTime(hours, 'hr', 'min'),
    minutesToHours: (minutes) => convertTime(minutes, 'min', 'hr'),
    daysToHours: (days) => convertTime(days, 'day', 'hr'),
    hoursToDays: (hours) => convertTime(hours, 'hr', 'day'),
    weeksTodays: (weeks) => convertTime(weeks, 'week', 'day'),
    daysToWeeks: (days) => convertTime(days, 'day', 'week')
};

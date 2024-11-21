declare const TIME_CONVERSIONS: {
    millisecond: number;
    ms: number;
    second: number;
    sec: number;
    seconds: number;
    minute: number;
    min: number;
    hour: number;
    hr: number;
    day: number;
    week: number;
    month: number;
    year: number;
};
type TimeUnit = keyof typeof TIME_CONVERSIONS;
/**
 * Converts time between different units
 * @param value - Numerical value to convert
 * @param from - Source unit
 * @param to - Target unit
 * @returns Converted time value
 */
export declare function convertTime(value: number, from: TimeUnit, to: TimeUnit): number;
export declare function roundTime(value: number, decimals?: number): number;
export declare const TimeConverter: {
    minutesToSeconds: (minutes: number) => number;
    secondsToMinutes: (seconds: number) => number;
    hoursToMinutes: (hours: number) => number;
    minutesToHours: (minutes: number) => number;
    daysToHours: (days: number) => number;
    hoursToDays: (hours: number) => number;
    weeksTodays: (weeks: number) => number;
    daysToWeeks: (days: number) => number;
};
export {};

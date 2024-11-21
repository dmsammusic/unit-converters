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

// Define a type for supported units
type SpeedUnit = keyof typeof SPEED_CONVERSIONS;

/**
 * Converts speed between different units
 * @param value - Numerical value to convert
 * @param from - Source unit
 * @param to - Target unit
 * @returns Converted speed value
 */

export function convertSpeed(value: number, from: SpeedUnit, to: SpeedUnit): number {
	// Validate input units
	if (!(from in SPEED_CONVERSIONS) || !(to in SPEED_CONVERSIONS)) {
		throw new Error(`Unsupported speed units: ${from} or ${to}`);
	}

	// If converting to the same unit, return the original value
	if (from === to) return value;

	const fromFactor = SPEED_CONVERSIONS[from];
	const toFactor = SPEED_CONVERSIONS[to];

	return (value * fromFactor) / toFactor;
}

// Utility function for precise rounding
export function roundSpeed(value: number, decimals: number = 4): number {
	const factor = Math.pow(10, decimals);
	return Math.round(value * factor) / factor;
}

// Convenience conversion methods
export const SpeedConverter = {
	// Metric conversions
	metersPerSecondToKilometersPerHour: (mps: number) => convertSpeed(mps, 'meter-per-second', 'kilometer-per-hour'),

	kilometersPerHourToMetersPerSecond: (kmh: number) => convertSpeed(kmh, 'kilometer-per-hour', 'meter-per-second'),

	milesPerSecondToKilometersPerHour: (mps: number) => {
		// More precise conversion calculation
		// 1 mile = 1.609344 kilometers
		// 1 second conversion
		return mps * 1.609344 * 3600;
	},
	// Imperial conversions
	milesPerHourToFeetPerSecond: (mph: number) => convertSpeed(mph, 'mile-per-hour', 'feet-per-second'),
	feetPerSecondToMilesPerHour: (fps: number) => convertSpeed(fps, 'feet-per-second', 'mile-per-hour'),

	kmToMilesPerHour: (kmh: number) => convertSpeed(kmh, 'kilometer-per-hour', 'mile-per-hour'),
	mileToKmPerHour: (mph: number) => convertSpeed(mph, 'mile-per-hour', 'kilometer-per-hour'),
};

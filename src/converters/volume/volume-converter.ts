const VOLUME_CONVERSIONS = {
	liter: 1,
	litre: 1, // Alias for "liter"
	milliliter: 0.001,
	millilitre: 0.001, // Alias for "milliliter"
	cubic_centimeter: 0.001,
	cubic_metre: 1000,
	cubic_meter: 1000, // Alias for "cubic_metre"
	cubic_inch: 0.016387064,
	cubic_foot: 28.316846592,
	us_gallon: 3.78541,
	gallon: 3.78541, // Alias for default gallon
	uk_gallon: 4.54609,
	quart: 1.05669,
};

type DefinedUnits = keyof typeof VOLUME_CONVERSIONS;

export function convertVolume(value: number, from: DefinedUnits, to: DefinedUnits): number {
	if (!(from in VOLUME_CONVERSIONS) || !(to in VOLUME_CONVERSIONS)) {
		throw new Error(`Unsupported units: ${from} or ${to}`);
	}

	const fromFactor = VOLUME_CONVERSIONS[from];
	const toFactor = VOLUME_CONVERSIONS[to];

	// Convert to liters, then to target unit
	return (value * fromFactor) / toFactor;
}

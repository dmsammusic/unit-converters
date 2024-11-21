const AREA_CONVERSIONS: Record<string, number> = {
	square_meter: 1,
	square_centimeter: 0.0001,
	square_inch: 0.00064516,
	square_foot: 0.092903,
	acre: 4046.8564224,
	are: 100,
	hectare: 10000,
};


export function convertArea(value: number, from: string, to: string): number {
	if (!(from in AREA_CONVERSIONS) || !(to in AREA_CONVERSIONS)) {
		throw new Error(`Unsupported units: ${from} or ${to}`);
	}

	const fromFactor = AREA_CONVERSIONS[from];
	const toFactor = AREA_CONVERSIONS[to];

	// Convert to square meters, then to target unit
	return (value * fromFactor) / toFactor;
}
import { convertSpeed, roundSpeed, SpeedConverter } from './speed-converter';

describe('Speed Conversion Utility', () => {
	// Metric Conversions
	describe('Metric Speed Conversions', () => {
		it('Meters per Second to Kilometers per Hour', () => {
			expect(convertSpeed(1, 'meter-per-second', 'kilometer-per-hour')).toBeCloseTo(3.6, 2);
		});

		it('Kilometers per Hour to Meters per Second', () => {
			expect(convertSpeed(3.6, 'kilometer-per-hour', 'meter-per-second')).toBeCloseTo(1, 2);
		});
	});

	// Imperial Conversions
	describe('Imperial Speed Conversions', () => {
		it('Miles per Hour to Feet per Second', () => {
			expect(convertSpeed(1, 'mile-per-hour', 'feet-per-second')).toBeCloseTo(1.467, 3);
		});

		it('Feet per Second to Miles per Hour', () => {
			expect(convertSpeed(1.467, 'feet-per-second', 'mile-per-hour')).toBeCloseTo(1, 2);
		});
	});

	// Cross-System Conversions
	describe('Cross-System Speed Conversions', () => {
		it('Kilometers per Hour to Inches per Second', () => {
			expect(convertSpeed(1, 'kilometer-per-hour', 'inch-per-second')).toBeCloseTo(10.936141732283467, 2);
		});

		it('Miles per Second to Kilometers per Hour', () => {
			// Using the more precise conversion method
			expect(SpeedConverter.milesPerSecondToKilometersPerHour(1)).toBeCloseTo(5793.638, 3);
		});
	});

	// Same Unit Conversions
	describe('Same Unit Conversions', () => {
		it('Meters per Second to Meters per Second', () => {
			expect(convertSpeed(50, 'meter-per-second', 'meter-per-second')).toBe(50);
		});

		it('Miles per Hour to Miles per Hour', () => {
			expect(convertSpeed(60, 'mile-per-hour', 'mile-per-hour')).toBe(60);
		});
	});

	// Error Handling
	describe('Error Handling', () => {
		it('Should throw error for unsupported from unit', () => {
			expect(() => convertSpeed(25, 'xyz' as any, 'meter-per-second')).toThrow('Unsupported speed units');
		});

		it('Should throw error for unsupported to unit', () => {
			expect(() => convertSpeed(25, 'meter-per-second', 'xyz' as any)).toThrow('Unsupported speed units');
		});
	});

	// Utility Method Tests
	describe('Utility Methods', () => {
		it('Rounding utility', () => {
			expect(roundSpeed(1.23456789, 2)).toBe(1.23);
			expect(roundSpeed(1.23456789, 4)).toBe(1.2346);
		});

		// Convenience Methods
		it('Convenience conversion methods', () => {
			expect(SpeedConverter.metersPerSecondToKilometersPerHour(1)).toBeCloseTo(3.6, 2);
			expect(SpeedConverter.kilometersPerHourToMetersPerSecond(3.6)).toBeCloseTo(1, 2);
			expect(SpeedConverter.milesPerHourToFeetPerSecond(1)).toBeCloseTo(1.467, 3);
		});
	});

	// Extreme Value Tests
	describe('Extreme Value Handling', () => {
		it('Large speed conversion', () => {
			const largeValue = 1000000;
			expect(() => convertSpeed(largeValue, 'meter-per-second', 'mile-per-hour')).not.toThrow();
		});

		it('Very small speed conversion', () => {
			const smallValue = 0.00001;
			expect(() => convertSpeed(smallValue, 'inch-per-hour', 'meter-per-second')).not.toThrow();
		});
	});
});

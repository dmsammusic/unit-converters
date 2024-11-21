import { convertMass, roundMass, MassConverter, convertWeight } from './mass-converter';

describe('Mass Conversion Utility', () => {
	// Basic Conversions
	describe('Basic Unit Conversions', () => {
		// Metric to Metric
		it('Kilograms to Grams', () => {
			expect(convertMass(1, 'kg', 'g')).toBeCloseTo(1000, 4);
		});

		it('convertWeight : Kilograms to Grams', () => {
			expect(convertWeight(1, 'kg', 'g')).toBeCloseTo(1000, 4);
		});

		it('Grams to Kilograms', () => {
			expect(convertMass(1000, 'g', 'kg')).toBeCloseTo(1, 4);
		});

		// Imperial to Imperial
		it('Pounds to Ounces', () => {
			expect(convertMass(1, 'lb', 'oz')).toBeCloseTo(16, 4);
		});

		it('Ounces to Pounds', () => {
			expect(convertMass(16, 'oz', 'lb')).toBeCloseTo(1, 4);
		});
	});

	// Cross-System Conversions
	describe('Cross-System Conversions', () => {
		it('Kilograms to Pounds', () => {
			expect(convertMass(1, 'kg', 'lb')).toBeCloseTo(2.20462, 4);
		});

		it('Pounds to Kilograms', () => {
			expect(convertMass(2.20462, 'lb', 'kg')).toBeCloseTo(1, 4);
		});

		it('Ounces to Grams', () => {
			expect(convertMass(1, 'oz', 'g')).toBeCloseTo(28.35, 2);
		});
	});

	// Ton Conversions
	describe('Ton Conversions', () => {
		it('Metric Ton to US Ton', () => {
			expect(convertMass(1, 'ton', 'us-ton')).toBeCloseTo(1.10231, 4);
		});

		it('Metric Ton to UK Ton', () => {
			expect(convertMass(1, 'ton', 'uk-ton')).toBeCloseTo(0.984207, 4);
		});
	});

	// Same Unit Conversions
	describe('Same Unit Conversions', () => {
		it('Kilogram to Kilogram should return same value', () => {
			expect(convertMass(50, 'kg', 'kg')).toBe(50);
		});

		it('Pound to Pound should return same value', () => {
			expect(convertMass(150, 'lb', 'lb')).toBe(150);
		});
	});

	// Error Handling
	describe('Error Handling', () => {
		it('Should throw error for unsupported from unit', () => {
			expect(() => convertMass(25, 'xyz' as any, 'kg')).toThrow('Unsupported mass units');
		});

		it('Should throw error for unsupported to unit', () => {
			expect(() => convertMass(25, 'kg', 'xyz' as any)).toThrow('Unsupported mass units');
		});
	});

	// Utility Method Tests
	describe('Utility Methods', () => {
		it('Rounding utility', () => {
			expect(roundMass(1.23456789, 2)).toBe(1.23);
			expect(roundMass(1.23456789, 4)).toBe(1.2346);
		});

		// Convenience Methods
		it('Convenience conversion methods', () => {
			expect(MassConverter.poundsToKilograms(1)).toBeCloseTo(0.453592, 6);
			expect(MassConverter.kilogramsToPounds(1)).toBeCloseTo(2.20462, 4);
			expect(MassConverter.ouncesToGrams(1)).toBeCloseTo(28.35, 2);
		});
	});

	// Large and Small Value Tests
	describe('Extreme Value Handling', () => {
		it('Large mass conversion', () => {
			const largeValue = 1000000;
			expect(() => convertMass(largeValue, 'kg', 'lb')).not.toThrow();
		});

		it('Very small mass conversion', () => {
			const smallValue = 0.00001;
			expect(() => convertMass(smallValue, 'g', 'oz')).not.toThrow();
		});
	});
});

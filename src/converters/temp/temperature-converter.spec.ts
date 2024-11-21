import { convertTemperature, TempConverter } from './temperature-converter';

describe('Temperature Conversion Function', () => {
	// Celsius to Fahrenheit Conversions
	describe('Celsius to Fahrenheit Conversions', () => {
		test('0°C should convert to 32°F', () => {
			expect(convertTemperature(0, 'C', 'F')).toBeCloseTo(32, 2);
		});

		test('100°C should convert to 212°F', () => {
			expect(convertTemperature(100, 'C', 'F')).toBeCloseTo(212, 2);
		});

		test('-40°C should convert to -40°F', () => {
			expect(convertTemperature(-40, 'C', 'F')).toBeCloseTo(-40, 2);
		});
	});

	// Fahrenheit to Celsius Conversions
	describe('Fahrenheit to Celsius Conversions', () => {
		test('32°F should convert to 0°C', () => {
			expect(convertTemperature(32, 'F', 'C')).toBeCloseTo(0, 2);
		});

		test('212°F should convert to 100°C', () => {
			expect(convertTemperature(212, 'F', 'C')).toBeCloseTo(100, 2);
		});

		test('-40°F should convert to -40°C', () => {
			expect(convertTemperature(-40, 'F', 'C')).toBeCloseTo(-40, 2);
		});
	});

	// Celsius to Kelvin Conversions
	describe('Celsius to Kelvin Conversions', () => {
		test('0°C should convert to 273.15K', () => {
			expect(convertTemperature(0, 'C', 'K')).toBeCloseTo(273.15, 2);
		});

		test('100°C should convert to 373.15K', () => {
			expect(convertTemperature(100, 'C', 'K')).toBeCloseTo(373.15, 2);
		});

		test('-273.15°C should convert to 0K', () => {
			expect(convertTemperature(-273.15, 'C', 'K')).toBeCloseTo(0, 2);
		});
	});

	// Kelvin to Celsius Conversions
	describe('Kelvin to Celsius Conversions', () => {
		test('273.15K should convert to 0°C', () => {
			expect(convertTemperature(273.15, 'K', 'C')).toBeCloseTo(0, 2);
		});

		test('373.15K should convert to 100°C', () => {
			expect(convertTemperature(373.15, 'K', 'C')).toBeCloseTo(100, 2);
		});
	});

	// Fahrenheit to Kelvin Conversions
	describe('Fahrenheit to Kelvin Conversions', () => {
		test('32°F should convert to 273.15K', () => {
			expect(convertTemperature(32, 'F', 'K')).toBeCloseTo(273.15, 2);
		});

		test('212°F should convert to 373.15K', () => {
			expect(convertTemperature(212, 'F', 'K')).toBeCloseTo(373.15, 2);
		});
	});

	// Kelvin to Fahrenheit Conversions
	describe('Kelvin to Fahrenheit Conversions', () => {
		test('273.15K should convert to 32°F', () => {
			expect(convertTemperature(273.15, 'K', 'F')).toBeCloseTo(32, 2);
		});

		test('373.15K should convert to 212°F', () => {
			expect(convertTemperature(373.15, 'K', 'F')).toBeCloseTo(212, 2);
		});
	});

	// Same Unit Conversions
	describe('Same Unit Conversions', () => {
		test('Celsius to Celsius should return same value', () => {
			expect(convertTemperature(25, 'C', 'C')).toBe(25);
		});

		test('Fahrenheit to Fahrenheit should return same value', () => {
			expect(convertTemperature(77, 'F', 'F')).toBe(77);
		});

		test('Kelvin to Kelvin should return same value', () => {
			expect(convertTemperature(300, 'K', 'K')).toBe(300);
		});
	});

	// Error Handling
	describe('Error Handling', () => {
		test('Should throw error for unsupported from unit', () => {
			expect(() => convertTemperature(25, 'X' as any, 'C')).toThrow('Unsupported units');
		});

		test('Should throw error for unsupported to unit', () => {
			expect(() => convertTemperature(25, 'C', 'X' as any)).toThrow('Unsupported units');
		});
	});
});

// Optional: Performance and Edge Case Test
describe('Performance and Edge Cases', () => {
	test('Should handle large temperature values', () => {
		expect(convertTemperature(1000000, 'C', 'F')).toBeDefined();
		expect(convertTemperature(1000000, 'F', 'K')).toBeDefined();
	});

	test('Should handle very small temperature values', () => {
		expect(convertTemperature(-1000000, 'K', 'C')).toBeDefined();
		expect(convertTemperature(-1000000, 'F', 'C')).toBeDefined();
	});
});

describe('Convenience methods Tests', () => {
	describe('Celsius to Fahrenheit Conversions', () => {
		it('0°C should convert to 32°F', () => {
			expect(TempConverter.celsiusToFahrenheit(0)).toBeCloseTo(32, 2);
		});

		it('100°C should convert to 212°F', () => {
			expect(TempConverter.celsiusToFahrenheit(100)).toBeCloseTo(212, 2);
		});

		it('-40°C should convert to -40°F', () => {
			expect(TempConverter.celsiusToFahrenheit(-40)).toBeCloseTo(-40, 2);
		});
	});

	// Fahrenheit to Celsius Conversions
	describe('Fahrenheit to Celsius Conversions', () => {
		test('32°F should convert to 0°C', () => {
			expect(TempConverter.fahrenheitToCelsius(32)).toBeCloseTo(0, 2);
		});

		test('212°F should convert to 100°C', () => {
			expect(TempConverter.fahrenheitToCelsius(212)).toBeCloseTo(100, 2);
		});

		test('-40°F should convert to -40°C', () => {
			expect(TempConverter.fahrenheitToCelsius(-40)).toBeCloseTo(-40, 2);
		});
	});
});

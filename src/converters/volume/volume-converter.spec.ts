import { convertVolume } from '../../main';

describe('convertVolume', () => {
	it('should convert liters to US gallons', () => {
		expect(convertVolume(10, 'liter', 'us_gallon')).toBeCloseTo(2.64172);
	});

	it('should convert litres to UK gallons', () => {
		expect(convertVolume(10, 'litre', 'uk_gallon')).toBeCloseTo(2.19969);
	});

	it('should convert liters to gallons (default US)', () => {
		expect(convertVolume(10, 'liter', 'gallon')).toBeCloseTo(2.64172);
	});

	it('should convert cubic meters to cubic feet', () => {
		expect(convertVolume(1, 'cubic_meter', 'cubic_foot')).toBeCloseTo(35.3147);
	});

	it('should convert cubic feet to cubic inches', () => {
		let value = convertVolume(1, 'cubic_foot', 'cubic_inch');
		expect(value).toBeCloseTo(1728, 5);
	});

	it('should convert milliliters to cubic centimeters', () => {
		expect(convertVolume(1, 'millilitre', 'cubic_centimeter')).toBeCloseTo(1);
	});

	it('should throw an error for unsupported units', () => {
		// @ts-expect-error
		expect(() => convertVolume(1, 'unsupported_unit', 'liter')).toThrow();
	});
});

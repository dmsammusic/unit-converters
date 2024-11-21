import { convertVolume } from '../main';

describe('convertVolume', () => {
	test('convert liters to gallons', () => {
		expect(convertVolume(1, 'liter', 'gallon')).toBeCloseTo(0.264172);
	});
	test('convert liters to quarts', () => {
		expect(convertVolume(1, 'liter', 'quart')).toBeCloseTo(1.05669);
	});
	test('convert gallons to liters', () => {
		expect(convertVolume(1, 'gallon', 'liter')).toBeCloseTo(3.78541);
	});
	test('convert gallons to quarts', () => {
		expect(convertVolume(1, 'gallon', 'quart')).toBeCloseTo(4);
	});
	test('convert quarts to liters', () => {
		expect(convertVolume(1, 'quart', 'liter')).toBeCloseTo(0.946353);
	});
	test('convert quarts to gallons', () => {
		expect(convertVolume(1, 'quart', 'gallon')).toBeCloseTo(0.25);
	});
});

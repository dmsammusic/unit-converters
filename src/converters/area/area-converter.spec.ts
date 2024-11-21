import { convertArea } from './area-converter';

describe('convertArea', () => {
	it('should convert square meters to square feet', () => {
		expect(convertArea(1, 'square_metre', 'square_foot')).toBeCloseTo(10.7639, 4);
	});

	it('should convert square feet to square inches', () => {
		expect(convertArea(1, 'square_foot', 'square_inch')).toBeCloseTo(144, 1);
	});

	it('should convert square inches to square centimeters', () => {
		expect(convertArea(1, 'square_inch', 'square_centimeter')).toBeCloseTo(6.4516, 5);
	});

	it('should convert hectares to acres', () => {
		expect(convertArea(1, 'hectare', 'acre')).toBeCloseTo(2.47105, 5);
	});

	it('should convert acres to square meters', () => {
		expect(convertArea(1, 'acre', 'square_metre')).toBeCloseTo(4046.86, 2);
	});

	it('should convert ares to hectares', () => {
		expect(convertArea(100, 'are', 'hectare')).toBeCloseTo(1, 5);
	});

	it('should convert hectares to square meters', () => {
		expect(convertArea(1, 'hectare', 'square_meter')).toBeCloseTo(10000, 5);
	});

	it('should throw an error for unsupported units', () => {
		// @ts-expect-error
		expect(() => convertArea(1, 'unsupported_unit', 'square_metre')).toThrow();
	});

	it('should handle same-unit conversion (identity)', () => {
		expect(convertArea(123, 'square_metre', 'square_metre')).toBe(123);
	});
});

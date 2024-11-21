import { convertLength } from './length-converter';

describe('convertLength', () => {
	it('should convert millimeters to meters', () => {
		expect(convertLength(1000, 'millimeter', 'meter')).toBeCloseTo(1);
	});

	it('should convert kilometers to nautical miles', () => {
		expect(convertLength(1, 'kilometer', 'nautical_mile')).toBeCloseTo(0.539957);
	});

	it('should convert inches to centimeters', () => {
		expect(convertLength(1, 'inch', 'centimeter')).toBeCloseTo(2.54);
	});

	it('should convert feet to miles', () => {
		expect(convertLength(5280, 'foot', 'mile')).toBeCloseTo(1);
	});

	it('should convert mils to inches', () => {
		expect(convertLength(1000, 'mil', 'inch')).toBeCloseTo(1);
	});
});

import { convertLength } from './length-converter';

test('convert meters to miles', () => {
	expect(convertLength(1000, 'meter', 'mile')).toBeCloseTo(0.621371);
});

test('convert miles to kilometers', () => {
	expect(convertLength(1, 'mile', 'kilometer')).toBeCloseTo(1.60934);
});

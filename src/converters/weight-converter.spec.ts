import { convertWeight } from '../main';

describe('convertWeight', () => {
	test('convert kilograms to pounds', () => {
		expect(convertWeight(1, 'kilogram', 'pound')).toBeCloseTo(2.20462);
	});
	test('convert kilograms to ounces', () => {
		expect(convertWeight(1, 'kilogram', 'ounce')).toBeCloseTo(35.274);
	});
	test('convert pounds to kilograms', () => {
		expect(convertWeight(1, 'pound', 'kilogram')).toBeCloseTo(0.453592);
	});
	test('convert pounds to ounces', () => {
		expect(convertWeight(1, 'pound', 'ounce')).toBeCloseTo(16);
	});
	test('convert ounces to kilograms', () => {
		expect(convertWeight(1, 'ounce', 'kilogram')).toBeCloseTo(0.0283495);
	});
	test('convert ounces to pounds', () => {
		expect(convertWeight(1, 'ounce', 'pound')).toBeCloseTo(0.0625);
	});
});

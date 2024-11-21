import { convertTime, roundTime, TimeConverter } from './time-converter';

describe('Time Conversion Utility', () => {
	// Basic Conversions
	describe('Basic Unit Conversions', () => {
		// Milliseconds to Seconds
		it('Milliseconds to Seconds', () => {
			expect(convertTime(1000, 'ms', 'sec')).toBe(1);
		});

		it('Seconds to Milliseconds', () => {
			expect(convertTime(1, 'sec', 'ms')).toBe(1000);
		});

		// Minutes to Seconds
		it('Minutes to Seconds', () => {
			expect(convertTime(1, 'min', 'sec')).toBe(60);
		});

		it('Seconds to Minutes', () => {
			expect(convertTime(60, 'sec', 'min')).toBe(1);
		});
	});

	// Larger Time Unit Conversions
	describe('Larger Time Unit Conversions', () => {
		it('Hours to Minutes', () => {
			expect(convertTime(1, 'hr', 'min')).toBe(60);
		});

		it('Days to Hours', () => {
			expect(convertTime(1, 'day', 'hr')).toBe(24);
		});

		it('Weeks to Days', () => {
			expect(convertTime(1, 'week', 'day')).toBe(7);
		});
	});

	// Same Unit Conversions
	describe('Same Unit Conversions', () => {
		it('Seconds to Seconds should return same value', () => {
			expect(convertTime(50, 'sec', 'sec')).toBe(50);
		});

		it('Minutes to Minutes should return same value', () => {
			expect(convertTime(30, 'min', 'min')).toBe(30);
		});
	});

	// Error Handling
	describe('Error Handling', () => {
		it('Should throw error for unsupported from unit', () => {
			expect(() => convertTime(25, 'xyz' as any, 'sec')).toThrow('Unsupported time units');
		});

		it('Should throw error for unsupported to unit', () => {
			expect(() => convertTime(25, 'sec', 'xyz' as any)).toThrow('Unsupported time units');
		});
	});

	// Utility Method Tests
	describe('Utility Methods', () => {
		it('Rounding utility', () => {
			expect(roundTime(1.23456789, 2)).toBe(1.23);
			expect(roundTime(1.23456789, 4)).toBe(1.2346);
		});

		// Convenience Methods
		it('Convenience conversion methods', () => {
			expect(TimeConverter.minutesToSeconds(1)).toBe(60);
			expect(TimeConverter.secondsToMinutes(60)).toBe(1);
			expect(TimeConverter.hoursToMinutes(1)).toBe(60);
			expect(TimeConverter.daysToHours(1)).toBe(24);
		});
	});

	// Extreme Value Tests
	describe('Extreme Value Handling', () => {
		it('Large time conversion', () => {
			const largeValue = 1000000;
			expect(() => convertTime(largeValue, 'sec', 'day')).not.toThrow();
		});

		it('Very small time conversion', () => {
			const smallValue = 0.00001;
			expect(() => convertTime(smallValue, 'ms', 'sec')).not.toThrow();
		});
	});
});

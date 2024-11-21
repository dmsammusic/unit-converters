"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertLength = convertLength;
const LENGTH_CONVERSIONS = {
    meter: 1,
    millimeter: 0.001,
    centimeter: 0.01,
    kilometer: 1000,
    inch: 0.0254,
    foot: 0.3048,
    feet: 0.3048, // to the false acceptance
    yard: 0.9144,
    mile: 1609.344,
    nautical_mile: 1852,
    mil: 0.0000254,
};
function convertLength(value, from, to) {
    if (!(from in LENGTH_CONVERSIONS) || !(to in LENGTH_CONVERSIONS)) {
        throw new Error(`Unsupported units: ${from} or ${to}`);
    }
    const fromFactor = LENGTH_CONVERSIONS[from];
    const toFactor = LENGTH_CONVERSIONS[to];
    // Convert to meters, then to target unit
    return (value * fromFactor) / toFactor;
}

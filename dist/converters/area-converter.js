"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertArea = convertArea;
const AREA_CONVERSIONS = {
    square_meter: 1,
    square_centimeter: 0.0001,
    square_inch: 0.00064516,
    square_foot: 0.092903,
    acre: 4046.8564224,
    are: 100,
    hectare: 10000,
};
function convertArea(value, from, to) {
    if (!(from in AREA_CONVERSIONS) || !(to in AREA_CONVERSIONS)) {
        throw new Error(`Unsupported units: ${from} or ${to}`);
    }
    const fromFactor = AREA_CONVERSIONS[from];
    const toFactor = AREA_CONVERSIONS[to];
    // Convert to square meters, then to target unit
    return (value * fromFactor) / toFactor;
}

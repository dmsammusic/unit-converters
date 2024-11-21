# Unit Converter

## Features

- Convert between metric and US customary units for **length**, **weight**, and **volume**.
- Simple API for quick integration.
- TypeScript for strong type safety.
- Easily extensible for additional unit categories or custom conversions.

---

## Installation

Install via npm:

```bash
npm install unit-converter
```

---

## Usage

Import converter functions and convert values between units.

### Length Conversion

Convert between units of length such as meters, miles, feet, and more:

```typescript
import { convertLength } from 'unit-converter';
const miles = convertLength(1000, 'meter', 'mile'); // 0.621371 miles
const feet = convertLength(1, 'kilometer', 'foot'); // 3280.84 feet
```

### Weight Conversion

Convert between kilograms, pounds, ounces, etc.:

```typescript
import { convertWeight } from 'unit-converter';

const pounds = convertWeight(10, 'kilogram', 'pound'); // 22.0462 pounds
const ounces = convertWeight(1, 'pound', 'ounce'); // 16 ounces
```

### Volume Conversion

Handle volume conversions like liters, gallons, and quarts:

```typescript
import { convertVolume } from 'unit-converter';

const gallons = convertVolume(3, 'liter', 'gallon'); // 0.792516 gallons
const liters = convertVolume(1, 'gallon', 'liter'); // 3.78541 liters
```

### Area Conversion

Convert between various area units such as acres, hectares, square meters, and more:

```typescript
import { convertArea } from 'unit-converter';

const acres = convertArea(1000, 'square_meter', 'acre'); // Output: 0.247105 acres
const squareFeet = convertArea(1, 'acre', 'square_foot'); // Output: 43560 square feet
```

---

## Supported Units

### Length Units

- Metric: meter, kilometer
- US Customary: mile, foot, yard

### Weight Units

- Metric: kilogram
- US Customary: pound, ounce

### Volume Units

- Metric: liter
- US Customary: gallon, quart

### Area Units

- Metric: square_meter, square_centimeter, are, hectare
- US Customary: acre, square_foot, square_inch

---

## API

### convertLength(value: number, from: string, to: string): number

Converts a length value between supported units.

- **value**: The numerical value to convert.
- **from**: The source unit.
- **to**: The target unit.

### convertWeight(value: number, from: string, to: string): number

Converts a weight value between supported units.

- **value**: The numerical value to convert.
- **from**: The source unit.
- **to**: The target unit.

### convertVolume(value: number, from: string, to: string): number

Converts a volume value between supported units.

- **value**: The numerical value to convert.
- **from**: The source unit.
- **to**: The target unit.

### convertArea(value: number, from: string, to: string): number

Converts an area value between the supported units.

- **value**: The numerical value to convert.
- **from**: The source unit.
- **to**: The target unit.

---

## Extending the Module

To add a new category or conversions:

1. Create a new file in `src/converters/`, e.g., `temperature-converter.ts`.
2. Define conversion rates or formulas in a similar structure.
3. Export the function and include it in `src/index.ts`.

---

## Development

### Run Tests

The library uses Jest for unit testing. Run tests with:

```bash
npm test
```

## Build the Library

Compile the TypeScript code into JavaScript for distribution:

```
npm run build
```

## Clean the Project

Remove all build artifacts:

```bash
npm run clean
```

## Contributing

Contributions are welcome! Feel free to submit issues or feature requests. Fork the repository and create a pull request for any improvements.

## License

This project is licensed under the MIT License.

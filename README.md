# Fignumbers

![NPM Version](https://img.shields.io/npm/v/fignumbers)
![NPM Type Definitions](https://img.shields.io/npm/types/fignumbers)
![NPM License](https://img.shields.io/npm/l/fignumbers)

**Fignumbers** is a comprehensive TypeScript library designed to generate and explore _figurate numbers_, numbers that can be visualized as geometric shapes in 2D, 3D, and higher-dimensional spaces.

Based on the book Figurate Numbers (2012) by Elena and Michel Deza, this library supports a wide range of infinite sequences.

## Why fignumbers? 🚀

1. Rich variety: Covers a broad range of figurate number sequences, for use in mathematical projects, visualization, algorithmic applications, or any work involving figurate number sequences.
2. Efficient and precise: Optimized for TypeScript, taking full advantage of its features to enhance performance and type safety.

### BigInt Support Required ⚠️

Fignumbers utilizes `BigInt` to manage large integers that exceed the `Number` type limit of `(2^53 - 1)`. Ensure that your environment supports **BigInt** before using this library.

## Three main classes ⚙️

**Fignumbers** is structured around three main classes, each corresponding to a different spatial dimension, as described in the book:

1. `PlaneFigNumbers` = 10
2. `SpaceFigNumbers` = 19
3. `MultiDimensionalFigNumbers` = 20

Each class offers specialized methods for generating different types of figurate numbers.

## Installation 🛠️

First, make sure you have the library installed via npm:

```node
npm install fignumbers
```

## Usage 🔥

```ts
// 1. Import the library
import { SpaceFigNumbers } from "fignumbers";

// 2. Configure parameters for the generator (use bigints for precision!)
const config = { start: 1n, m: 5n, step: 1n };

// 3. Choose the type of space figurate number you want (pyramidal, cubic, etc.)
const pyramidalNumbers = SpaceFigNumbers.generate("pyramidal", config);

// 4. Get ready to see the magic happen! First 7 pyramidal numbers with m = 5n:
console.log("First 7 pyramidal numbers with m = 5n:");
for (let i = 0; i < 7; i++) {
  const nextNumber = pyramidalNumbers.next().value; // Grab the next number in the sequence
  console.log(`Number ${i + 1}: ${nextNumber}`);
}
```

## Expected Output 🌟

```txt
First 7 pyramidal numbers with m = 5n:
  Number 1: 1n
  Number 2: 6n
  Number 3: 18n
  Number 4: 40n
  Number 5: 75n
  Number 6: 126n
  Number 7: 196n
```

## Contributing

Fignumbers is currently under development, and we warmly invite your contributions. Just **fork** the project and then submit a **pull request**:

- Sequences from Chapters 1, 2, and 3 of the book
- New sequences not included in the book: If you have new sequences, please provide the source.
- Tests, documentation and errata in the book

When making commits, please use the following conventional prefixes to indicate the nature of the changes: `feat`, `refactor`, `fix`, `docs`, and `test`.

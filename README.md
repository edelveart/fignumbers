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

1. `PlaneFigNumbers` = 121
2. `SpaceFigNumbers` = 132
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

## List of implemented sequences

### 1. PlaneFigNumbers

1. polygonal
2. centeredPolygonal
3. truncatedCenteredPolygonal
4. pronic
5. truncatedPronic
6. polite
7. impolite
8. aztecDiamond
9. gnomic
10. cross
11. polygram
12. triangular
13. square
14. pentagonal
15. hexagonal
16. heptagonal
17. octagonal
18. nonagonal
19. decagonal
20. hendecagonal
21. dodecagonal
22. tridecagonal
23. tetradecagonal
24. pentadecagonal
25. hexadecagonal
26. heptadecagonal
27. octadecagonal
28. nonadecagonal
29. icosagonal
30. icosihenagonal
31. icosidigonal
32. icositrigonal
33. icositetragonal
34. icosipentagonal
35. icosihexagonal
36. icosiheptagonal
37. icosioctagonal
38. icosinonagonal
39. triacontagonal
40. centeredTriangular
41. centeredSquare
42. centeredPentagonal
43. centeredHexagonal
44. centeredHeptagonal
45. centeredOctagonal
46. centeredNonagonal
47. centeredDecagonal
48. centeredHendecagonal
49. centeredDodecagonal
50. centeredTridecagonal
51. centeredTetradecagonal
52. centeredPentadecagonal
53. centeredHexadecagonal
54. centeredHeptadecagonal
55. centeredOctadecagonal
56. centeredNonadecagonal
57. centeredIcosagonal
58. centeredIcosihenagonal
59. centeredIcosidigonal
60. centeredIcositrigonal
61. centeredIcositetragonal
62. centeredIcosipentagonal
63. centeredIcosihexagonal
64. centeredIcosiheptagonal
65. centeredIcosioctagonal
66. centeredIcosinonagonal
67. centeredTriacontagonal
68. truncatedCenteredTriangular
69. truncatedCenteredSquare
70. truncatedCenteredPentagonal
71. truncatedCenteredHexagonal
72. truncatedCenteredHeptagonal
73. truncatedCenteredOctagonal
74. truncatedCenteredNonagonal
75. truncatedCenteredDecagonal
76. truncatedCenteredHendecagonal
77. truncatedCenteredDodecagonal
78. truncatedCenteredTridecagonal
79. truncatedCenteredTetradecagonal
80. truncatedCenteredPentadecagonal
81. truncatedCenteredHexadecagonal
82. truncatedCenteredHeptadecagonal
83. truncatedCenteredOctadecagonal
84. truncatedCenteredNonadecagonal
85. truncatedCenteredIcosagonal
86. truncatedCenteredIcosihenagonal
87. truncatedCenteredIcosidigonal
88. truncatedCenteredIcositrigonal
89. truncatedCenteredIcositetragonal
90. truncatedCenteredIcosipentagonal
91. truncatedCenteredIcosihexagonal
92. truncatedCenteredIcosiheptagonal
93. truncatedCenteredIcosioctagonal
94. truncatedCenteredIcosinonagonal
95. truncatedCenteredTriacontagonal
96. pentagram
97. hexagram
98. heptagram
99. octagram
100. nonagram
101. decagram
102. hendecagram
103. dodecagram
104. tridecagram
105. tetradecagram
106. pentadecagram
107. hexadecagram
108. heptadecagram
109. octadecagram
110. nonadecagram
111. icosagram
112. icosihenagram
113. icosidigram
114. icositrigram
115. icositetragram
116. icosipentagram
117. icosihexagram
118. icosiheptagram
119. icosioctagram
120. icosinonagram
121. triacontagram

### 2. SpaceFigNumbers

1. pyramidal
2. mgonalPrism
3. centeredMgonalPyramidal
4. centeredMgonalPyramid
5. centeredTruncatedCube
6. centeredTruncatedTetrahedron
7. centeredTruncatedOctahedron
8. cubic
9. tetrahedral
10. octahedral
11. dodecahedral
12. icosahedral
13. stellaOctangula
14. truncatedCubic
15. truncatedTetrahedral
16. truncatedOctahedral
17. rhombicDodecahedral
18. hauyRhombicDodecahedral
19. centeredCube
20. centeredDodecahedron
21. centeredIcosahedron
22. centeredOctahedron
23. triangularPyramidal
24. squarePyramidal
25. pentagonalPyramidal
26. hexagonalPyramidal
27. heptagonalPyramidal
28. octagonalPyramidal
29. nonagonalPyramidal
30. decagonalPyramidal
31. hendecagonalPyramidal
32. dodecagonalPyramidal
33. tridecagonalPyramidal
34. tetradecagonalPyramidal
35. pentadecagonalPyramidal
36. hexadecagonalPyramidal
37. heptadecagonalPyramidal
38. octadecagonalPyramidal
39. nonadecagonalPyramidal
40. icosagonalPyramidal
41. icosihenagonalPyramidal
42. icosidigonalPyramidal
43. icositrigonalPyramidal
44. icositetragonalPyramidal
45. icosipentagonalPyramidal
46. icosihexagonalPyramidal
47. icosiheptagonalPyramidal
48. icosioctagonalPyramidal
49. icosinonagonalPyramidal
50. triacontagonalPyramidal
51. centeredPentagonalPyramid
52. centeredHexagonalPyramid
53. centeredHeptagonalPyramid
54. centeredOctagonalPyramid
55. centeredNonagonalPyramid
56. centeredDecagonalPyramid
57. centeredHendecagonalPyramid
58. centeredDodecagonalPyramid
59. centeredTridecagonalPyramid
60. centeredTetradecagonalPyramid
61. centeredPentadecagonalPyramid
62. centeredHexadecagonalPyramid
63. centeredHeptadecagonalPyramid
64. centeredOctadecagonalPyramid
65. centeredNonadecagonalPyramid
66. centeredIcosagonalPyramid
67. centeredIcosihenagonalPyramid
68. centeredIcosidigonalPyramid
69. centeredIcositrigonalPyramid
70. centeredIcositetragonalPyramid
71. centeredIcosipentagonalPyramid
72. centeredIcosihexagonalPyramid
73. centeredIcosiheptagonalPyramid
74. centeredIcosioctagonalPyramid
75. centeredIcosinonagonalPyramid
76. centeredTriacontagonalPyramid
77. centeredTriangularPyramidal
78. centeredSquarePyramidal
79. centeredPentagonalPyramidal
80. centeredHexagonalPyramidal
81. centeredHeptagonalPyramidal
82. centeredOctagonalPyramidal
83. centeredNonagonalPyramidal
84. centeredDecagonalPyramidal
85. centeredHendecagonalPyramidal
86. centeredDodecagonalPyramidal
87. centeredTridecagonalPyramidal
88. centeredTetradecagonalPyramidal
89. centeredPentadecagonalPyramidal
90. centeredHexadecagonalPyramidal
91. centeredHeptadecagonalPyramidal
92. centeredOctadecagonalPyramidal
93. centeredNonadecagonalPyramidal
94. centeredIcosagonalPyramidal
95. centeredIcosihenagonalPyramidal
96. centeredIcosidigonalPyramidal
97. centeredIcositrigonalPyramidal
98. centeredIcositetragonalPyramidal
99. centeredIcosipentagonalPyramidal
100. centeredIcosihexagonalPyramidal
101. centeredIcosiheptagonalPyramidal
102. centeredIcosioctagonalPyramidal
103. centeredIcosinonagonalPyramidal
104. centeredTriacontagonalPyramidal
105. triangularPrism
106. squarePrism
107. pentagonalPrism
108. hexagonalPrism
109. heptagonalPrism
110. octagonalPrism
111. nonagonalPrism
112. decagonalPrism
113. hendecagonalPrism
114. dodecagonalPrism
115. tridecagonalPrism
116. tetradecagonalPrism
117. pentadecagonalPrism
118. hexadecagonalPrism
119. heptadecagonalPrism
120. octadecagonalPrism
121. nonadecagonalPrism
122. icosagonalPrism
123. icosihenagonalPrism
124. icosidigonalPrism
125. icositrigonalPrism
126. icositetragonalPrism
127. icosipentagonalPrism
128. icosihexagonalPrism
129. icosiheptagonalPrism
130. icosioctagonalPrism
131. icosinonagonalPrism
132. triacontagonalPrism

## Contributing

Fignumbers is currently under development, and we warmly invite your contributions. Just **fork** the project and then submit a **pull request**:

- Sequences from Chapters 1, 2, and 3 of the book
- New sequences not included in the book: If you have new sequences, please provide the source.
- Tests, documentation and errata in the book

When making commits, please use the following conventional prefixes to indicate the nature of the changes: `feat`, `refactor`, `fix`, `docs`, and `test`.

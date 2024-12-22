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
2. `SpaceFigNumbers` = 133
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
19. centeredTetrahedron
20. centeredCube
21. centeredDodecahedron
22. centeredIcosahedron
23. centeredOctahedron
24. triangularPyramidal
25. squarePyramidal
26. pentagonalPyramidal
27. hexagonalPyramidal
28. heptagonalPyramidal
29. octagonalPyramidal
30. nonagonalPyramidal
31. decagonalPyramidal
32. hendecagonalPyramidal
33. dodecagonalPyramidal
34. tridecagonalPyramidal
35. tetradecagonalPyramidal
36. pentadecagonalPyramidal
37. hexadecagonalPyramidal
38. heptadecagonalPyramidal
39. octadecagonalPyramidal
40. nonadecagonalPyramidal
41. icosagonalPyramidal
42. icosihenagonalPyramidal
43. icosidigonalPyramidal
44. icositrigonalPyramidal
45. icositetragonalPyramidal
46. icosipentagonalPyramidal
47. icosihexagonalPyramidal
48. icosiheptagonalPyramidal
49. icosioctagonalPyramidal
50. icosinonagonalPyramidal
51. triacontagonalPyramidal
52. centeredPentagonalPyramid
53. centeredHexagonalPyramid
54. centeredHeptagonalPyramid
55. centeredOctagonalPyramid
56. centeredNonagonalPyramid
57. centeredDecagonalPyramid
58. centeredHendecagonalPyramid
59. centeredDodecagonalPyramid
60. centeredTridecagonalPyramid
61. centeredTetradecagonalPyramid
62. centeredPentadecagonalPyramid
63. centeredHexadecagonalPyramid
64. centeredHeptadecagonalPyramid
65. centeredOctadecagonalPyramid
66. centeredNonadecagonalPyramid
67. centeredIcosagonalPyramid
68. centeredIcosihenagonalPyramid
69. centeredIcosidigonalPyramid
70. centeredIcositrigonalPyramid
71. centeredIcositetragonalPyramid
72. centeredIcosipentagonalPyramid
73. centeredIcosihexagonalPyramid
74. centeredIcosiheptagonalPyramid
75. centeredIcosioctagonalPyramid
76. centeredIcosinonagonalPyramid
77. centeredTriacontagonalPyramid
78. centeredTriangularPyramidal
79. centeredSquarePyramidal
80. centeredPentagonalPyramidal
81. centeredHexagonalPyramidal
82. centeredHeptagonalPyramidal
83. centeredOctagonalPyramidal
84. centeredNonagonalPyramidal
85. centeredDecagonalPyramidal
86. centeredHendecagonalPyramidal
87. centeredDodecagonalPyramidal
88. centeredTridecagonalPyramidal
89. centeredTetradecagonalPyramidal
90. centeredPentadecagonalPyramidal
91. centeredHexadecagonalPyramidal
92. centeredHeptadecagonalPyramidal
93. centeredOctadecagonalPyramidal
94. centeredNonadecagonalPyramidal
95. centeredIcosagonalPyramidal
96. centeredIcosihenagonalPyramidal
97. centeredIcosidigonalPyramidal
98. centeredIcositrigonalPyramidal
99. centeredIcositetragonalPyramidal
100. centeredIcosipentagonalPyramidal
101. centeredIcosihexagonalPyramidal
102. centeredIcosiheptagonalPyramidal
103. centeredIcosioctagonalPyramidal
104. centeredIcosinonagonalPyramidal
105. centeredTriacontagonalPyramidal
106. triangularPrism
107. squarePrism
108. pentagonalPrism
109. hexagonalPrism
110. heptagonalPrism
111. octagonalPrism
112. nonagonalPrism
113. decagonalPrism
114. hendecagonalPrism
115. dodecagonalPrism
116. tridecagonalPrism
117. tetradecagonalPrism
118. pentadecagonalPrism
119. hexadecagonalPrism
120. heptadecagonalPrism
121. octadecagonalPrism
122. nonadecagonalPrism
123. icosagonalPrism
124. icosihenagonalPrism
125. icosidigonalPrism
126. icositrigonalPrism
127. icositetragonalPrism
128. icosipentagonalPrism
129. icosihexagonalPrism
130. icosiheptagonalPrism
131. icosioctagonalPrism
132. icosinonagonalPrism
133. triacontagonalPrism

## Contributing

Fignumbers is currently under development, and we warmly invite your contributions. Just **fork** the project and then submit a **pull request**:

- Sequences from Chapters 1, 2, and 3 of the book
- New sequences not included in the book: If you have new sequences, please provide the source.
- Tests, documentation and errata in the book

When making commits, please use the following conventional prefixes to indicate the nature of the changes: `feat`, `refactor`, `fix`, `docs`, and `test`.

<h1 align="center"> Fignumbers </h1>

**Fignumbers** is a comprehensive TypeScript library for generating and exploring infinite figurate number sequences, linked to geometric shapes across multiple dimensions.

<p align="center">
  <img src="https://img.shields.io/npm/v/fignumbers" alt="NPM Version">
  <img src="https://img.shields.io/npm/types/fignumbers" alt="NPM Type Definitions">
  <img src="https://img.shields.io/npm/l/fignumbers" alt="NPM License">
  <img src="https://img.shields.io/npm/d18m/fignumbers" alt="NPM Downloads">
</p>

[![Fignumbers Image](https://github.com/edelveart/fignumbers/blob/main/fignumber-banner.png)](https://www.npmjs.com/package/fignumbers)

## Rich variety with academic foundation 🚀

Based on the book _Figurate Numbers_ (2012) by Elena Deza and Michel Deza, this library covers a broad range of figurate number sequences. This academic foundation ensures its reliability and precision for use in various fields:

- **Mathematical projects**
- **Visualization**
- **Algorithmic applications**
- **Any work involving figurate number sequences**

It is precise and type-safe, but performance may not be as optimized as smaller number types, since bigint operations are typically slower than traditional number operations.

## Installation 🛠️

First, make sure you have the library installed via npm:

```node
npm install fignumbers
```

### BigInt Support Required ⚠️

- **Fignumbers** utilizes `BigInt` to manage large integers that exceed the `Number` type limit of `(2^53 - 1)`. Ensure that your environment supports **BigInt** before using this library.

## Usage 🔥

### Three main classes ⚙️

**Fignumbers** is structured around three main classes, each corresponding to a different spatial dimension, as described in the book:

1. **PlaneFigNumbers** – 121 sequences
2. **SpaceFigNumbers** – 133 sequences
3. **MultiDimensionalFigNumbers** – 191 sequences

Together, these classes implement a total of 445 figurate number sequences.

### Example

```ts
// 1. Import the library
import { SpaceFigNumbers } from "fignumbers";

// 2. Configure parameters for the generator (use bigints for precision!)
const config = { start: 1n, m: 5n, step: 1n };

// 3. Choose the type of space figurate number you want (pyramidal, cubic, etc.)
const pyramidalSequence = new SpaceFigNumbers("pyramidal");
const pyramidalNumbers = pyramidalSequence.generate(config);

// 4. Get ready to see the magic happen! First 7 pyramidal numbers with m = 5n:
console.log("First 7 pyramidal numbers with m = 5n:");
for (let i = 0; i < 7; i++) {
  const nextNumber = pyramidalNumbers.next().value; // Grab the next number in the sequence
  console.log(`Number ${i + 1}: ${nextNumber}`);
}
```

### Expected Output

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

## Overview of implemented sequences per class 🌟

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
2. tetrahedral
3. cubic
4. octahedral
5. dodecahedral
6. icosahedral
7. centeredMgonalPyramidal
8. centeredMgonalPyramid
9. centeredTetrahedron
10. centeredCube
11. centeredOctahedron
12. centeredDodecahedron
13. centeredIcosahedron
14. truncatedTetrahedral
15. truncatedCubic
16. truncatedOctahedral
17. centeredTruncatedTetrahedron
18. centeredTruncatedCube
19. centeredTruncatedOctahedron
20. stellaOctangula
21. rhombicDodecahedral
22. hauyRhombicDodecahedral
23. mgonalPrism
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

### 3. MultiDimensionalFigNumbers

1. hyperTetrahedral
2. hyperCubic
3. hyperOctahedral
4. hyperDodecahedral
5. hyperIcosahedral
6. polyOctahedral
7. kDimensionalHyperTetrahedron
8. kDimensionalHyperCube
9. kDimensionalHyperOctahedron
10. kDimensionalMgonalPyramidal
11. fiveDimensionalMgonalPyramidal
12. fourDimensionalMgonalPyramidal
13. sixDimensionalMgonalPyramidal
14. centeredHyperTetrahedron
15. kDimensionalCenteredHyperTetrahedron
16. centeredHyperCube
17. kDimensionalCenteredHyperCube
18. centeredHyperOctahedral
19. kDimensionalCenteredHyperOctahedron
20. nexus
21. pentatope
22. biquadratic
23. tesseract
24. 5-cell
25. 8-cell
26. 16-cell
27. 120-cell
28. 600-cell
29. 24-cell
30. pentachoron
31. octachoron
32. hexadecachoron
33. hecatonicosachoron
34. hexacosichoron
35. icositetrachoron
36. 5-simplex
37. 6-simplex
38. 7-simplex
39. 8-simplex
40. 9-simplex
41. 10-simplex
42. 11-simplex
43. 12-simplex
44. 13-simplex
45. 14-simplex
46. 15-simplex
47. 16-simplex
48. 17-simplex
49. 18-simplex
50. 19-simplex
51. 20-simplex
52. 21-simplex
53. 22-simplex
54. 23-simplex
55. 24-simplex
56. 25-simplex
57. 26-simplex
58. 27-simplex
59. 28-simplex
60. 29-simplex
61. 30-simplex
62. 5-hypercube
63. 6-hypercube
64. 7-hypercube
65. 8-hypercube
66. 9-hypercube
67. 10-hypercube
68. 11-hypercube
69. 12-hypercube
70. 13-hypercube
71. 14-hypercube
72. 15-hypercube
73. 16-hypercube
74. 17-hypercube
75. 18-hypercube
76. 19-hypercube
77. 20-hypercube
78. 21-hypercube
79. 22-hypercube
80. 23-hypercube
81. 24-hypercube
82. 25-hypercube
83. 26-hypercube
84. 27-hypercube
85. 28-hypercube
86. 29-hypercube
87. 30-hypercube
88. 5-cross-polytope
89. 6-cross-polytope
90. 7-cross-polytope
91. 8-cross-polytope
92. 9-cross-polytope
93. 10-cross-polytope
94. 11-cross-polytope
95. 12-cross-polytope
96. 13-cross-polytope
97. 14-cross-polytope
98. 15-cross-polytope
99. 16-cross-polytope
100. 17-cross-polytope
101. 18-cross-polytope
102. 19-cross-polytope
103. 20-cross-polytope
104. 21-cross-polytope
105. 22-cross-polytope
106. 23-cross-polytope
107. 24-cross-polytope
108. 25-cross-polytope
109. 26-cross-polytope
110. 27-cross-polytope
111. 28-cross-polytope
112. 29-cross-polytope
113. 30-cross-polytope
114. 5-centered-hypertetrahedron
115. 6-centered-hypertetrahedron
116. 7-centered-hypertetrahedron
117. 8-centered-hypertetrahedron
118. 9-centered-hypertetrahedron
119. 10-centered-hypertetrahedron
120. 11-centered-hypertetrahedron
121. 12-centered-hypertetrahedron
122. 13-centered-hypertetrahedron
123. 14-centered-hypertetrahedron
124. 15-centered-hypertetrahedron
125. 16-centered-hypertetrahedron
126. 17-centered-hypertetrahedron
127. 18-centered-hypertetrahedron
128. 19-centered-hypertetrahedron
129. 20-centered-hypertetrahedron
130. 21-centered-hypertetrahedron
131. 22-centered-hypertetrahedron
132. 23-centered-hypertetrahedron
133. 24-centered-hypertetrahedron
134. 25-centered-hypertetrahedron
135. 26-centered-hypertetrahedron
136. 27-centered-hypertetrahedron
137. 28-centered-hypertetrahedron
138. 29-centered-hypertetrahedron
139. 30-centered-hypertetrahedron
140. 5-centered-hypercube
141. 6-centered-hypercube
142. 7-centered-hypercube
143. 8-centered-hypercube
144. 9-centered-hypercube
145. 10-centered-hypercube
146. 11-centered-hypercube
147. 12-centered-hypercube
148. 13-centered-hypercube
149. 14-centered-hypercube
150. 15-centered-hypercube
151. 16-centered-hypercube
152. 17-centered-hypercube
153. 18-centered-hypercube
154. 19-centered-hypercube
155. 20-centered-hypercube
156. 21-centered-hypercube
157. 22-centered-hypercube
158. 23-centered-hypercube
159. 24-centered-hypercube
160. 25-centered-hypercube
161. 26-centered-hypercube
162. 27-centered-hypercube
163. 28-centered-hypercube
164. 29-centered-hypercube
165. 30-centered-hypercube
166. 5-centered-hyperoctahedron
167. 6-centered-hyperoctahedron
168. 7-centered-hyperoctahedron
169. 8-centered-hyperoctahedron
170. 9-centered-hyperoctahedron
171. 10-centered-hyperoctahedron
172. 11-centered-hyperoctahedron
173. 12-centered-hyperoctahedron
174. 13-centered-hyperoctahedron
175. 14-centered-hyperoctahedron
176. 15-centered-hyperoctahedron
177. 16-centered-hyperoctahedron
178. 17-centered-hyperoctahedron
179. 18-centered-hyperoctahedron
180. 19-centered-hyperoctahedron
181. 20-centered-hyperoctahedron
182. 21-centered-hyperoctahedron
183. 22-centered-hyperoctahedron
184. 23-centered-hyperoctahedron
185. 24-centered-hyperoctahedron
186. 25-centered-hyperoctahedron
187. 26-centered-hyperoctahedron
188. 27-centered-hyperoctahedron
189. 28-centered-hyperoctahedron
190. 29-centered-hyperoctahedron
191. 30-centered-hyperoctahedron

## Contributing

Fignumbers is currently under development, and we warmly invite your contributions. Just **fork** the project and then submit a **pull request**:

- Sequences from Chapters 1, 2, and 3 of the book
- New sequences not included in the book: If you have new sequences, please provide the source.
- Tests, documentation and errata in the book

When making commits, please use the following conventional prefixes to indicate the nature of the changes: `feat`, `refactor`, `fix`, `docs`, and `test`.

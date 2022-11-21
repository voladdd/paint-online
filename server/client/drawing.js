// export const calc = function (zoom, x, y, RESOLUTION, position) {
//   const result = [];
//   console.log(zoom, x, y, RESOLUTION, position);
//   for (var r = 0; r < RESOLUTION; r++) {
//     for (var c = 0; c < RESOLUTION; c++) {
//       // convert from Cartesian coordinates to complex coordinates
//       let complex = {
//         r: x - zoom / 2 + (zoom * c) / RESOLUTION,
//         i: y + zoom / 2 - (zoom * r) / RESOLUTION,
//       };

//       // test the point and return number of iterations
//       var n = isBounded(complex);
//       result.push({ n: n, r: r, c: c });
//     }
//   }
//   return result;
// };

export const draw = (arr, canvas) => {
  arr.forEach((point) => {
    canvas.fillStyle =
      'rgb(' +
      ((3 * point.n) % 255) +
      ',' +
      ((9 * point.n) % 255) +
      ',' +
      ((81 * point.n) % 255) +
      ')';
    canvas.fillRect(point.c, point.r, 1, 1);
  });
};

// defines the max number of times we iterate for a given number
var MAX_ITERATIONS = 500;

//r - vertical, c - horizontal
// export const SplitIterations = [
//   {
//     r: {
//       start: 0,
//       end: MAX_ITERATIONS / 2,
//     },
//     c: {
//       start: 0,
//       end: MAX_ITERATIONS / 2,
//     },
//   },
//   {
//     r: {
//       start: 0,
//       end: MAX_ITERATIONS / 2,
//     },
//     c: {
//       start: MAX_ITERATIONS / 2,
//       end: MAX_ITERATIONS,
//     },
//   },
//   {
//     r: {
//       start: MAX_ITERATIONS / 2,
//       end: MAX_ITERATIONS,
//     },
//     c: {
//       start: 0,
//       end: MAX_ITERATIONS / 2,
//     },
//   },
//   {
//     r: {
//       start: MAX_ITERATIONS / 2,
//       end: MAX_ITERATIONS,
//     },
//     c: {
//       start: MAX_ITERATIONS / 2,
//       end: MAX_ITERATIONS,
//     },
//   },
// ];

// returns the number of iterations it took to see if the number is bounded
// const isBounded = function (c) {
//   // we are simulating an imaginary number by using 2 js numbers (1 for the 'real' part, and 1 for the 'imaginary' part)
//   let m = { r: 0, i: 0 }; // m for Mandelbrot :)

//   for (var i = 0; i < MAX_ITERATIONS; i++) {
//     // fc(z) = z^2 + C
//     // (a+bi)*(a+bi) = a^2 - b^2 + 2ab
//     let temp = m.r;
//     m.r = m.r * m.r - m.i * m.i + c.r;
//     m.i = 2 * temp * m.i + c.i;

//     // Pythagorean theorem. Calculating if distance from origin is greater than 2
//     // if: a^2 + b^2 > 2^2
//     // since we are on the complex plane, 'a' is the real part, 'b' is the imaginary part
//     if (m.r * m.r + m.i * m.i > 4) {
//       // number tends to infinity, return # of iterations
//       return i;
//     }
//   }
//   // number might be bounded, return # of iterations
//   return i;
// };

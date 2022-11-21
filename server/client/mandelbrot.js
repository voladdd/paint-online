import { draw } from './drawing.js';
// import { SplitIterations } from './drawing.js';

// const workerBL = new Worker("./workerBL.js", {
//   type: "module",
// });
// const workerBR = new Worker("./workerBR.js", {
//   type: "module",
// });
// const workerTL = new Worker("./workerTL.js", {
//   type: "module",
// });
// const workerTR = new Worker("./workerTR.js", {
//   type: "module",
// });

// const workers = [workerTL, workerTR, workerBL, workerBR];

var MAX_ITERATIONS = 500;

const calcWorkers = () => {
  const getcoord = fetch('http://localhost:3001/mandelbrot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      zoom: zoom,
      x: x0,
      y: y0,
      resolution: RESOLUTION,
      //   position: {
      //     r: {
      //       start: 0,
      //       end: MAX_ITERATIONS,
      //     },
      //     c: {
      //       start: 0,
      //       end: MAX_ITERATIONS,
      //     },
      //   },
    }),
  })
    .then((res) => res.json())
    .then((arr) => {
      // draw(value, ctx);
      // console.log(arr);
      return arr;
    });

  const getArr = async () => {
    const arr = await getcoord;
    draw(arr, ctx);
    // console.log(arr);
    // return arr;
  };

  getArr();
};
// workers.forEach((w, index) => {
//   w.postMessage({
//     zoom: zoom,
//     x: x0,
//     y: y0,
//     resolution: RESOLUTION,
//     position: {
//       r: {
//         start: SplitIterations[index].r.start,
//         end: SplitIterations[index].r.end,
//       },
//       c: {
//         start: SplitIterations[index].c.start,
//         end: SplitIterations[index].c.end,
//       },
//     },
//   });
// });
// };

var canv = document.getElementById('canvas');
var ctx = canv.getContext('2d');

var RESOLUTION = canv.width;
var LEFT_OFFSET = canv.offsetLeft;
var TOP_OFFSET = canv.offsetTop;

var zoomIn = function (position) {
  x0 = x0 - zoom / 2 + (zoom * position.x) / RESOLUTION;
  y0 = y0 + zoom / 2 - (zoom * position.y) / RESOLUTION;
  zoom /= 10;
};

// 4 seems good, but this can be anything
var zoom = 4;
var x0 = 0;
var y0 = 0;

var handleClick = function (event) {
  var x = event.pageX - LEFT_OFFSET;
  var y = event.pageY - TOP_OFFSET;
  zoomIn({ x: x, y: y });

  calcWorkers();
};

// let startTime, endTime;
// const timeCounter = {
//   count: 0,
//   totalTime: 0,
// };

// workers.forEach((w, i) => {
//   w.onmessage = (e) => {
//     startTime = performance.now();
//     draw(e.data, ctx);
//     endTime = performance.now();
//     if (timeCounter.count < 3) {
//       timeCounter.count += 1;
//       timeCounter.totalTime += endTime - startTime;
//     } else {
//       console.log(`Time: ${timeCounter.totalTime}ms`);
//       timeCounter.count = 0;
//       timeCounter.totalTime = 0;
//     }
//   };
// });

canv.addEventListener('mousedown', handleClick);

await calcWorkers();

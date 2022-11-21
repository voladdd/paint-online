import { CalculateDto } from './dto/calculate.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  calculateMandelbrot(dto: CalculateDto) {
    // console.log(dto);
    const MAX_ITERATIONS = 500;
    const isBounded = (c) => {
      // we are simulating an imaginary number by using 2 js numbers (1 for the 'real' part, and 1 for the 'imaginary' part)
      const m = { r: 0, i: 0 }; // m for Mandelbrot :)
      for (var i = 0; i < MAX_ITERATIONS; i++) {
        // fc(z) = z^2 + C
        // (a+bi)*(a+bi) = a^2 - b^2 + 2ab
        const temp = m.r;
        m.r = m.r * m.r - m.i * m.i + c.r;
        m.i = 2 * temp * m.i + c.i;

        // Pythagorean theorem. Calculating if distance from origin is greater than 2
        // if: a^2 + b^2 > 2^2
        // since we are on the complex plane, 'a' is the real part, 'b' is the imaginary part
        if (m.r * m.r + m.i * m.i > 4) {
          // number tends to infinity, return # of iterations
          return i;
        }
      }
      // number might be bounded, return # of iterations
      return i;
    };
    const calc = (zoom, x, y, resolution) => {
      const result = [];
      for (let r = 0; r < resolution; r++) {
        for (let c = 0; c < resolution; c++) {
          // convert from Cartesian coordinates to complex coordinates
          const complex = {
            r: x - zoom / 2 + (zoom * c) / resolution,
            i: y + zoom / 2 - (zoom * r) / resolution,
          };

          // test the point and return number of iterations
          const n = isBounded(complex);
          result.push({ n, r, c });
        }
      }
      return result;
    };
    const res = calc(dto.zoom, dto.x, dto.y, dto.resolution);
    // console.log(res);
    return res;
  }
  getHello(): string {
    return 'Hello World!';
  }
}

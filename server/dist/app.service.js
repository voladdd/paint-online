"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    calculateMandelbrot(dto) {
        const MAX_ITERATIONS = 500;
        const isBounded = (c) => {
            const m = { r: 0, i: 0 };
            for (var i = 0; i < MAX_ITERATIONS; i++) {
                const temp = m.r;
                m.r = m.r * m.r - m.i * m.i + c.r;
                m.i = 2 * temp * m.i + c.i;
                if (m.r * m.r + m.i * m.i > 4) {
                    return i;
                }
            }
            return i;
        };
        const calc = (zoom, x, y, resolution) => {
            const result = [];
            for (let r = 0; r < resolution; r++) {
                for (let c = 0; c < resolution; c++) {
                    const complex = {
                        r: x - zoom / 2 + (zoom * c) / resolution,
                        i: y + zoom / 2 - (zoom * r) / resolution,
                    };
                    const n = isBounded(complex);
                    result.push({ n, r, c });
                }
            }
            return result;
        };
        const res = calc(dto.zoom, dto.x, dto.y, dto.resolution);
        return res;
    }
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map
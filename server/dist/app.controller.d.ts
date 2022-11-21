import { CalculateDto } from './dto/calculate.dto';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    calculateMandelbrot(calculateDto: CalculateDto): any[];
}

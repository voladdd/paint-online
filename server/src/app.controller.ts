import { CalculateDto } from './dto/calculate.dto';
import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Post('/mandelbrot')
  calculateMandelbrot(@Body() calculateDto: CalculateDto) {
    return this.appService.calculateMandelbrot(calculateDto);
  }
}

import { Controller, Get, Post, Body } from '@nestjs/common';
import { CarsServiceService } from '../cars-service/cars-service.service';
import { Car } from '../interfaces/car/car.interface';
import { CreateCarDto } from 'src/dto/create-car.dto';

@Controller('cars')
export class CarsControllerController {
  constructor(private readonly carsService: CarsServiceService) {}

  @Post()
  async create(@Body() createCarDto: CreateCarDto) {
    this.carsService.create(createCarDto);
  }

  @Get()
  async findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }
}

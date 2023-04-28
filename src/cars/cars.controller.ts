import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from '../dto/create-car.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  @ApiOkResponse({ type: [CreateCarDto] })
  async findAll() {
    return this.carsService.findAll();
  }

  @Post()
  @ApiOkResponse({ type: CreateCarDto })
  async create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: CreateCarDto })
  async findOne(@Param() { id }: { id: string }) {
    return this.carsService.findOne(Number(id));
  }
}

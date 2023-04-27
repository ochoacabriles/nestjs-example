import { Injectable } from '@nestjs/common';

import { Car } from '../interfaces/car/car.interface';

@Injectable()
export class CarsServiceService {
  private readonly cars: Car[] = [];

  create(car: Car) {
    this.cars.push(car);
  }

  findAll(): Car[] {
    return this.cars;
  }
}

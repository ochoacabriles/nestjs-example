import { Injectable } from '@nestjs/common';
import { Car } from 'src/interfaces/car/car.interface';

@Injectable()
export class CarsService {
  private readonly cars: Car[] = [];

  create(car: Car) {
    this.cars.push(car);
    return car;
  }

  findAll(): Car[] {
    return this.cars;
  }

  findOne(id: number): Car {
    return this.cars[id];
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { CarsControllerController } from './cars-controller.controller';

describe('CarsControllerController', () => {
  let controller: CarsControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsControllerController],
    }).compile();

    controller = module.get<CarsControllerController>(CarsControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

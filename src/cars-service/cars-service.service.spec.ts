import { Test, TestingModule } from '@nestjs/testing';
import { CarsServiceService } from './cars-service.service';

describe('CarsServiceService', () => {
  let service: CarsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsServiceService],
    }).compile();

    service = module.get<CarsServiceService>(CarsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

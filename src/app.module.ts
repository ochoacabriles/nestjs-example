import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModuleModule } from './cars-module/cars-module.module';
import { CarsControllerController } from './cars-controller/cars-controller.controller';
import { CarsServiceService } from './cars-service/cars-service.service';

@Module({
  imports: [CarsModuleModule],
  controllers: [AppController, CarsControllerController],
  providers: [AppService, CarsServiceService],
})
export class AppModule {}

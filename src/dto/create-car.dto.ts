import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
  @ApiProperty()
  readonly brand: string;

  @ApiProperty()
  readonly model: string;

  @ApiProperty()
  readonly year: number;
}

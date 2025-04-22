import { ApiProperty } from '@nestjs/swagger';

export class TestAppDto {
  @ApiProperty({
    description: 'Check if the app is running',
    example: 'Hello World!',
  })
  message: string;
}

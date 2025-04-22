import { Injectable } from '@nestjs/common';
import { TestAppDto } from 'src/app.dto';

@Injectable()
export class AppService {
  getHello(): TestAppDto {
    return { message: 'Hello World!' };
  }
}

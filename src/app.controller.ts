import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TestAppDto } from 'src/app.dto';
import { AppService } from 'src/app.service';

@ApiTags('App')
@Controller({ version: '1' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ description: 'Hello World!' })
  getHello(): TestAppDto {
    return this.appService.getHello();
  }
}

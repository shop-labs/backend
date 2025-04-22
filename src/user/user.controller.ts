import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/user/user.service';

@ApiTags('Users')
@Controller({ path: 'user', version: '999' })
export class UserController {
  constructor(private readonly userService: UserService) {}
}

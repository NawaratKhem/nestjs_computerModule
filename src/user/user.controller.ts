import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly UserService: UserService,
    private readonly utilityService: UtilityService,
    private readonly globalService: GlobalHelperService,
  ) {}

  @Get('/shared')
  showShared(): string {
    return this.globalService.globalFunc();
  }

  @Get('/global')
  showGlobalFunc(): string {
    return this.globalService.globalFunc();
  }
}

import { Controller, Get } from '@nestjs/common';
import { ChatService } from './chat.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('chat')
export class ChatController {
  constructor(
    private readonly productService: ChatService,
    private readonly utilityService: UtilityService,
    private readonly globalService: GlobalHelperService,
  ) {}

  @Get('/shared')
  showShared(): string {
    return this.utilityService.sharedFunction();
  }

  @Get('/global')
  showGlobalFunc(): string {
    return this.globalService.globalFunc();
  }
}

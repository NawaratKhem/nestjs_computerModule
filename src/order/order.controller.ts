import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('order')
export class OrderController {
  constructor(
    private readonly productService: OrderService,
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

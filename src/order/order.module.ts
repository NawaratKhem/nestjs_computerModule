import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { UtilityModule } from 'src/shared/utility/utility.module';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Module({
  providers: [OrderService, GlobalHelperService],
  controllers: [OrderController],
  imports: [UtilityModule],
})
export class OrderModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { UtilityModule } from './shared/utility/utility.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { OrderService } from './order/order.service';
import { ChatModule } from './chat/chat.module';
import { ChatController } from './chat/chat.controller';
import { OrderModule } from './order/order.module';
import { ChatService } from './chat/chat.service';
import { GlobalHelperModule } from './shared/global-helper/global-helper.module';

@Module({
  imports: [UtilityModule, ProductModule, UserModule, OrderModule, ChatModule, GlobalHelperModule],
  controllers: [AppController, ProductController, ChatController],
  providers: [AppService, ProductService, OrderService, ChatService],
})
export class AppModule {}

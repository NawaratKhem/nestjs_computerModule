import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { UtilityModule } from 'src/shared/utility/utility.module';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Module({
  providers: [ChatService, GlobalHelperService],
  controllers: [ChatController],
  imports: [UtilityModule],
})
export class ChatModule {}

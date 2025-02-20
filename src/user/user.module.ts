import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UtilityModule } from 'src/shared/utility/utility.module';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Module({
  providers: [UserService, GlobalHelperService],
  controllers: [UserController],
  imports: [UtilityModule],
})
export class UserModule {}

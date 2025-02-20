import { Module } from '@nestjs/common';
import { UtilityModule } from 'src/shared/utility/utility.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [UtilityModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}

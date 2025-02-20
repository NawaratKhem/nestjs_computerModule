import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { productDTO } from 'src/types';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly utilityService: UtilityService,
  ) {}
  @Get('/productjson')
  showInfo(): productDTO {
    return this.productService.showJson();
  }
  @Get('/shared')
  showShared(): string {
    return this.utilityService.sharedFunction();
  }
}

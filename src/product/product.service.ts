import { Injectable } from '@nestjs/common';
import { productDTO } from 'src/types';

@Injectable()
export class ProductService {
  showJson(): productDTO {
    return {
      name: 'Spaceship',
      age: 9999,
      hobby: 'Destroying planets',
    };
  }
}

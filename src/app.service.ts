import { Injectable } from '@nestjs/common';
import { UserDTO } from './types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  showInfo(): string {
    return 'Hello, I am Khim, 25.3 years old';
  }

  showJson(): UserDTO {
    return {
      name: 'Khim',
      lastName: 'Chatree',
      age: 99,
    };
  }
}

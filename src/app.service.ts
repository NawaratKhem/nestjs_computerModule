import { Injectable } from '@nestjs/common';
import { UserDTO } from './types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  showInfo(): string {
    return 'Hello, I am Khim';
  }

  showJson(): UserDTO {
    return {
      name: 'Khim',
      lastName: 'Chatree',
      age: 99,
    };
  }

  gitTesting(): string {
    return 'Git and GitHub using';
  }

  postTesting(): string {
    return 'We use postman';
  }
}

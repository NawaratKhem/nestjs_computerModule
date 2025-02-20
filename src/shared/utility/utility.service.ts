import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
  sharedFunction(): string {
    return 'use share utility shared module';
  }
}

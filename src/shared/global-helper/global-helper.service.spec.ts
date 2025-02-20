import { Test, TestingModule } from '@nestjs/testing';
import { GlobalHelperService } from './global-helper.service';

describe('GlobalHelperService', () => {
  let service: GlobalHelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GlobalHelperService],
    }).compile();

    service = module.get<GlobalHelperService>(GlobalHelperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
